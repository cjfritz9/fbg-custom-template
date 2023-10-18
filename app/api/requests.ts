import { FormattedProductResponse } from '@/@types/api';
import { FilterMethods } from '@/@types/shop';
import { cache } from 'react';

export const getHomeContent = cache(async () => {
  const response = await fetch(`${process.env.BASE_API_URL}/content/home`);
  const result = await response.json();

  return result;
});

export const getProducts = cache(
  async (): Promise<FormattedProductResponse> => {
    const response = await fetch(`api/products`);
    const results = await response.json();

    return results;
  }
);

export const getPaginatedProducts = cache(
  async (query: string): Promise<FormattedProductResponse> => {
    const response = await fetch(`api/products?${query}`);
    const results = await response.json();

    return results;
  }
);

export const getProductByHandle = cache(async (handle: string) => {
  const response = await fetch(`api/products/${handle}`);
  const result = await response.json();

  return result;
});

export const getProductsByTag = cache(
  async (tag: FilterMethods): Promise<FormattedProductResponse> => {
    const response = await fetch(`api/products/tags/${tag}`);
    const results = await response.json();

    return results;
  }
);
