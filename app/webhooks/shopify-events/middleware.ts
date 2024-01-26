import crypto from 'crypto';
import { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
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
  } else {
    return new Response('Unauthorized Request', {
      status: 401
    });
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/webhooks/shopify-events/:path*'
};
