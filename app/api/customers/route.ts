import { postNewCustomerEmailSignup } from '@/shopify/customers/customers.model';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  if (body && body.email) {
    const response = await postNewCustomerEmailSignup(body.email);
    return NextResponse.json(response);
  } else {
    return NextResponse.json(
      { error: true, message: 'Unhandled server error' },
      { status: 500 }
    );
  }
};
