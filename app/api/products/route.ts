import { fetchAllProducts } from '@/graphql/products/products.model';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const results = await fetchAllProducts();

  return NextResponse.json(results);
};
