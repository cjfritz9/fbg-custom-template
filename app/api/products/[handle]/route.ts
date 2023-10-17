import { getProductByHandle } from '@/graphql/products/products.model';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  req: NextRequest,
  { params }: { params: { handle: string } }
) => {
  const { handle } = params;
  const result = await getProductByHandle(handle)

  return NextResponse.json(result);
};
