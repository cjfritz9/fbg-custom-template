import { fetchPartnersList } from '@/shopify/content/content.model';
import { fetchProducts } from '@/shopify/products/products.model';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const results = await fetchPartnersList();

  return NextResponse.json(results);
};
