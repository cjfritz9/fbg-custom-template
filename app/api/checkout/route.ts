import storeClient from '@/shopify/shopify-store-client';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const checkoutId = req.nextUrl.searchParams.get('id');
  if (!checkoutId) {
    return NextResponse.json('No checkout ID provided');
  }
  const checkout = await storeClient.checkout.fetch(checkoutId);

  return NextResponse.json(checkout);
};

export const POST = async (req: NextRequest) => {
  const checkout = await storeClient.checkout.create();

  return NextResponse.json(checkout);
};
