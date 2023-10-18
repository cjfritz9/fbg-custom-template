import { fetchProducts } from '@/graphql/products/products.model';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const cursor = req.nextUrl.searchParams.get('cursor');
  const nextPage = req.nextUrl.searchParams.get('nextPage') === 'true'
  const results = await fetchProducts({cursor, nextPage});

  return NextResponse.json(results);
};
