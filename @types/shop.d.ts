import { StaticImageData } from 'next/image';
import React, { PropsWithChildren } from 'react';
import { PageInfo } from './api';

export type SortMethods =
  | 'featured'
  | 'newest'
  | 'highest rated'
  | 'price - low'
  | 'price - high';

export type FilterMethods = string;

type Cursor = string | null;

export type PaginationData = {
  startCursor: Cursor;
  hasPreviousPage: boolean;
  endCursor: Cursor;
  hasNextPage: boolean;
}