import storeClient from '@/shopify/shopify-store-client';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const checkoutId = req.nextUrl.searchParams.get('id');
  const payload = await req.json();
  if (!checkoutId) {
    return NextResponse.json('No checkout ID provided');
  }
  if (!payload.lineItems) {
    return NextResponse.json('No line items provided');
  }

  const checkoutRes = await storeClient.checkout.addLineItems(
    checkoutId,
    payload.lineItems
  );

  return NextResponse.json(checkoutRes);
};
