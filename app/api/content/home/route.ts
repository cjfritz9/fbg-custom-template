import { getHomeContent } from '@/graphql/content/content.model';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const results = await getHomeContent();

  return NextResponse.json(results);
};
