import { fetchProductsByTag } from '@/shopify/products/products.model';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  req: NextRequest,
  { params }: { params: { tag: string } }
) => {
  const { tag } = params;
  const result = await fetchProductsByTag(tag);

  return NextResponse.json(result);
};
