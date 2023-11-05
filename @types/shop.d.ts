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
  addLineItem: (
    checkoutId: string,
    variantId: string,
    quantity: number
  ) => Promise<void>;
  updateLineItem: (
    checkoutId: string,
    lineItemIds: ShopifyBuy.CheckoutLineItemUpdateInput[]
  ) => Promise<void>;
  removeLineItem: (checkoutId: string, lineItemIds: string[]) => Promise<void>;
}

export interface ProductVariant {
  id: string;
  title: string;
};

export interface ContactFormFields {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export interface ReturnFormFields extends ContactFormFields {
  orderNumber: string;
}
