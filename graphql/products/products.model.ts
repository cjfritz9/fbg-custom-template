import {
  FormattedProductResponse,
  ProductByHandleResponse,
  ProductsResponse
} from '@/@types/api';
import client from '../shopify-client';
import {
  formatProductResponse,
  formatProductsResponse
} from '../utils';
import { GetProductsParams } from '@/@types/shopify';

const fetchPrevPage = async (cursor: string) => {
  const data = `{
    products(first: 6, before: "${cursor}") {
      nodes {
        title
        handle
        description
        images(first: 5) {
          nodes {
            url
            altText
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }`;
  const response = (await client.query({
    data
  })) as ProductsResponse;

  return response;
};

const fetchNextPage = async (cursor: string | null) => {
  const data = `{
    products(first: 6, after: ${cursor ? `"${cursor}"` : null}) {
      nodes {
        title
        handle
        description
        images(first: 5) {
          nodes {
            url
            altText
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }`;
  const response = (await client.query({
    data
  })) as ProductsResponse;

  return response;
};

export const fetchProducts = async ({
  cursor,
  nextPage
}: GetProductsParams): Promise<FormattedProductResponse> => {
  let response: ProductsResponse;
  if (!cursor || nextPage) {
    response = await fetchNextPage(cursor)
  } else {
    response = await fetchPrevPage(cursor)
  }

  const results = formatProductsResponse(response);

  return results;
};

export const fetchProductByHandle = async (handle: string) => {
  const data = `{
    productByHandle(handle: "${handle}") {
      title
      handle
      description
      images(first: 10) {
        nodes {
          altText
          url
        }
      }
    }
  }`;
  const response = (await client.query({
    data
  })) as ProductByHandleResponse;

  const result = formatProductResponse(response);

  return result;
};

export const fetchProductsByTag = async (
  tag: string
): Promise<FormattedProductResponse> => {
  const data = `{
    products (first: 10, query: "tag:${tag}") {
      nodes {
        title
        handle
        description
        images(first: 10) {
          nodes {
            altText
            url
          }
        }
      }
    }
  }`;
  const response = (await client.query({
    data
  })) as ProductsResponse;

  const results = formatProductsResponse(response);

  return results;
};
