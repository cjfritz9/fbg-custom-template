import { CACHE_TAG_METAOBJECTS, CACHE_TAG_PRODUCTS } from '@/app/api/requests';
import { revalidateTag } from 'next/cache';
import getRawBody from 'raw-body';
import crypto from 'crypto';

export const POST = async (req: any) => {
  const payload = await req.json();
  const rawBody = await getRawBody(req);

  console.log({ payload });
  console.log({ headers: req.headers.get('X-Shopify-Hmac-Sha256') });
  const hash = crypto
    .createHmac(
      process.env.HASH_HMAC_ALGORITHM!,
      process.env.SHOPIFY_WEBHOOK_SIGNATURE!
  )
    .update(rawBody)
    .digest('base64');
  console.log({ hash });

  revalidateTag(CACHE_TAG_PRODUCTS);

  if (payload.model === 'metaobjects') {
    revalidateTag(CACHE_TAG_METAOBJECTS);
  }

  return new Response(null, { status: 204 });
};
