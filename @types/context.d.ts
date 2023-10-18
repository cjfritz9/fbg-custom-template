import { StaticImageData } from 'next/image';
import React, { PropsWithChildren } from 'react';

export interface FormattedProduct {
  title: string;
  handle: string;
  description: string;
  images: { url: string; altText: string }[]
}

export interface ProductsInterface {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  getAllProducts: () => void;
  filterProducts: (method: FilterMethods) => void;
  sortProducts: (method: SortMethods) => void;
}

export type SortMethods =
  | 'featured'
  | 'newest'
  | 'highest rated'
  | 'price - low'
  | 'price - high';

export type FilterMethods = 'full kits' | 'parts';
