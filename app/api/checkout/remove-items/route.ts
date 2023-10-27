import storeClient from '@/shopify/shopify-store-client';
import { NextRequest, NextResponse } from 'next/server';

export const DELETE = async (req: NextRequest) => {
  const checkoutId = req.nextUrl.searchParams.get('id');
  const payload = await req.json();
  if (!checkoutId) {
    return NextResponse.json('No checkout ID provided');
  }
  if (!payload.lineItemIds) {
    return NextResponse.json('No line item IDs provided');
  }

  const checkoutRes = await storeClient.checkout.removeLineItems(
    checkoutId,
    payload.lineItemIds
  );

  return NextResponse.json(checkoutRes);
};
