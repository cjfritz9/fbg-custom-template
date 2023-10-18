import { fetchHomeContent } from '@/graphql/content/content.model';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const results = await fetchHomeContent();

  return NextResponse.json(results);
};
