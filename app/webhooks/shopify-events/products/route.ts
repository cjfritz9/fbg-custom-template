import { CACHE_TAG_METAOBJECTS, CACHE_TAG_PRODUCTS } from '@/app/api/requests';
import { revalidateTag } from 'next/cache';
import crypto from 'crypto';
import { NextRequest } from 'next/server';
import getRawBody from 'raw-body';
import { Readable } from 'stream';

export const POST = async (req: any) => {
  const payload = await (req as NextRequest).json();
  const body = await getRawBody(req as Readable);
  const text = await req.text();

  console.log({ text });

  console.log({ payload });
  console.log({ headers: req.headers.get('X-Shopify-Hmac-Sha256') });
  const hash = crypto
    .createHmac(
      process.env.HASH_HMAC_ALGORITHM!,
      process.env.SHOPIFY_WEBHOOK_SIGNATURE!
    )
    .update(body)
    .digest('base64');
  console.log({ hash });

  revalidateTag(CACHE_TAG_PRODUCTS);

  if (payload.model === 'metaobjects') {
    revalidateTag(CACHE_TAG_METAOBJECTS);
  }

  return new Response(null, { status: 204 });
};
