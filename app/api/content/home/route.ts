import { fetchHomeContent } from '@/shopify/content/content.model';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const result = await fetchHomeContent();

  return NextResponse.json(result);
};
