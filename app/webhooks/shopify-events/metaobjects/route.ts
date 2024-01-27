import { CACHE_TAG_METAOBJECTS } from '@/app/api/requests';
import { revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';
import crypto from 'crypto';

export const POST = async (_req: NextRequest) => {
  console.info('Webhook validated...');
  console.info('Metaobjects cache updating.');
  revalidateTag(CACHE_TAG_METAOBJECTS);
  return new Response(null, { status: 200 });
};
