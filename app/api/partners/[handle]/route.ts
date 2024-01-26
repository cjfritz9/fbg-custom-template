import { fetchPartnerByHandle } from '@/shopify/content/content.model';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  req: NextRequest,
  { params }: { params: { handle: string } }
) => {
  const { handle } = params;

  try {
    const result = await fetchPartnerByHandle(handle);
    return NextResponse.json(result);
  } catch (error) {
    console.log({ error });
    return NextResponse.json(null)
  }
};
