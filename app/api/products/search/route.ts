import { fetchProductsByQuery } from '@/graphql/products/products.model';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const query = request.nextUrl.searchParams.get('query');
  if (!query) {
    return NextResponse.json('No query value provided')
  }
  const response = await fetchProductsByQuery(query);
  return NextResponse.json(response);
};
