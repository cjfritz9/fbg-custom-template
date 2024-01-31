import { CACHE_TAG_PRODUCTS } from '@/app/api/requests';
import { revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';
import crypto from 'crypto';

export const POST = async (req: NextRequest) => {
  const data = await req.text();

  console.info('Webhook received...');
  const hmacHeader = req.headers.get('X-Shopify-Hmac-Sha256');
  const digest = crypto
    .createHmac(
      process.env.HASH_HMAC_ALGORITHM!,
      process.env.SHOPIFY_WEBHOOK_SIGNATURE!
    )
    .update(data)
    .digest(process.env.HASH_HMAC_ENCODING! as crypto.BinaryToTextEncoding);

  if (hmacHeader === digest) {
    console.info('Webhook validated...');
    console.info('Products cache updating.');
    revalidateTag(CACHE_TAG_PRODUCTS);
    return new Response(null, { status: 200 });
  } else {
    return new Response('Unauthorized Request', {
      status: 401
    });
  }
};
