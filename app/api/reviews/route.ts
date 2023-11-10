import { fetchReviewsByProductHandle } from '@/judgedotme/utils';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const handle = request.nextUrl.searchParams.get('handle');
  const page = request.nextUrl.searchParams.get('page') ?? 1;
  const perPage = request.nextUrl.searchParams.get('perPage') ?? 3;
  if (!handle) {
    return NextResponse.json('No product handle provided');
  }

  const reviews = await fetchReviewsByProductHandle(handle, +page, +perPage);
  return NextResponse.json(reviews);
};
