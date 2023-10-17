import { getAllProducts } from '@/graphql/products/products.model';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const results = await getAllProducts()

  return NextResponse.json(results);
};
