import { CACHE_TAG_METAOBJECTS, CACHE_TAG_PRODUCTS } from '@/app/api/requests';
import { revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  const payload = await req.json();

  console.log(payload);
  console.log(req.headers.get('X-Shopify-Hmac-Sha256'));

  revalidateTag(CACHE_TAG_PRODUCTS);

  if (payload.model === 'metaobjects') {
    revalidateTag(CACHE_TAG_METAOBJECTS);
  }

  return new Response(null, { status: 204 });
};
