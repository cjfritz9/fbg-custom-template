import { fetchProductByHandle } from '@/shopify/products/products.model';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  req: NextRequest,
  { params }: { params: { handle: string } }
) => {
  const { handle } = params;

  try {
    const result = await fetchProductByHandle(handle);
    return NextResponse.json(result);
  } catch (error) {
    console.log({ error });
    return NextResponse.json(null)
  }
};
