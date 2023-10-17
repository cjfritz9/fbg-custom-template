import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const query = request.nextUrl.searchParams.get('query');
  return NextResponse.json(`Results for: ${query}`);
};
