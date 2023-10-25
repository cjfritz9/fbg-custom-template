import { fetchReviewsByProductHandle } from '@/judge.me/utils';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const handle = request.nextUrl.searchParams.get('handle');
  if (!handle) {
    return NextResponse.json('No product handle provided');
  }
  const reviews = await fetchReviewsByProductHandle(handle);
  return NextResponse.json(reviews);
};
