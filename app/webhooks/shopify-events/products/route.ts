import { CACHE_TAG_PRODUCTS } from '@/app/api/requests';
import { revalidateTag } from 'next/cache';
import crypto from 'crypto';
import { NextRequest } from 'next/server';
import getRawBody from 'raw-body';
import { Readable } from 'stream';

export const POST = async (req: NextRequest) => {
  const payload = await req.json();

  console.log({ payload });
  console.log({ headers: req.headers.get('X-Shopify-Hmac-Sha256') });
  // const hash = crypto
  //   .createHmac(
  //     process.env.HASH_HMAC_ALGORITHM!,
  //     process.env.SHOPIFY_WEBHOOK_SIGNATURE!
  //   )
  //   .update(payload.body, 'utf8')
  //   .digest('base64');
  // console.log({ hash });

  revalidateTag(CACHE_TAG_PRODUCTS);

  return new Response(null, { status: 204 });
};
