import { StaticImageData } from 'next/image';
import React, { PropsWithChildren } from 'react';
import { PageInfo } from './api';
import ShopifyBuy from 'shopify-buy';

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
};

export interface CartInterface {
  showCart: boolean;
  checkout: ShopifyBuy.Checkout | undefined;
  openCart: () => void;
  closeCart: () => void;
  addLineItem: (checkoutId: string, variantId: string, quantity: number) => Promise<void>;
  removeLineItem: (checkoutId: string, lineItemIds: string[]) => Promise<void>;
}
