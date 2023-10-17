import { getAllProducts } from '@/graphql/products/products.model';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const results = await getAllProducts()

  console.log(results[0].node.images.nodes[0].url);
  return NextResponse.json(results);
};
