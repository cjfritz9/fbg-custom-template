import { fetchAboutContent } from '@/shopify/content/content.model';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const results = await fetchAboutContent();

  return NextResponse.json(results);
};
