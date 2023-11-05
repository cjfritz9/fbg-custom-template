import {
  fetchReviewsByProductHandle,
  postReviewByProductHandle
} from '@/judge.me/utils';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const handle = req.nextUrl.searchParams.get('handle');
  const page = req.nextUrl.searchParams.get('page') ?? 1;
  const perPage = req.nextUrl.searchParams.get('perPage') ?? 3;
  if (!handle) {
    return NextResponse.json('No product handle provided');
  }

  const reviews = await fetchReviewsByProductHandle(handle, +page, +perPage);
  return NextResponse.json(reviews);
};

export const POST = async (req: NextRequest) => {
  const handle = req.nextUrl.searchParams.get('handle');
  if (!handle) {
    return NextResponse.json('No product handle provided');
  }

  const reviewData = await req.json();

  const result = await postReviewByProductHandle(reviewData)

  return NextResponse.json(result);
};
