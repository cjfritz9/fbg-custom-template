import {
  FormattedProduct,
  FormattedProductResponse,
  ProductByHandleResponse,
  ProductsResponse,
  QueryResult
} from '@/@types/api';
import client from '../shopify-client';
import {
  formatProductResponse,
  formatProductsByQueryResponse,
  formatProductsResponse
} from '../utils';
import { GetProductsParams } from '@/@types/shopify';

const fetchPrevPage = async (cursor: string) => {
  const data = `{
    products(last: 6, before: "${cursor}") {
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
        priceRangeV2 {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        metafields(first: 2, namespace: "reviews") {
          nodes {
            key
            id
            namespace
            value
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
        priceRangeV2 {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        metafields(first: 2, namespace: "reviews") {
          nodes {
            key
            id
            namespace
            value
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
    response = await fetchNextPage(cursor);
  } else {
    response = await fetchPrevPage(cursor);
  }

  const results = formatProductsResponse(response);

  return results;
};

export const fetchProductsByQuery = async (
  query: string
): Promise<QueryResult[]> => {
  const data = `{
    products(
      first: 5,
      query: "(product_type:${query}) OR (tag:${query}) OR (title:*${query}*)"
    ) {
      nodes {
        title
        handle
        images (first: 1) {
          nodes {
            url
          }
        }
        priceRangeV2 {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        metafields(first: 2, namespace: "reviews") {
          nodes {
            key
            id
            namespace
            value
          }
        }
      }
    }
  }`;

  const response = (await client.query({
    data
  })) as ProductsResponse;

  const results = formatProductsByQueryResponse(response);

  return results;
};

export const fetchProductByHandle = async (handle: string) => {
  const data = `{
    productByHandle(handle: "${handle}") {
      title
      handle
      description
      images(first: 5) {
        nodes {
          url
          altText
        }
      }
      includes: metafield(namespace: "custom", key: "includes") {
        value
      }
      specs: metafield(namespace: "custom", key: "specs") {
        value
      }
     	priceRangeV2 {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      metafields(first: 2, namespace: "reviews") {
        nodes {
          key
          id
          namespace
          value
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
    products (first: 6, query: "tag:${tag}") {
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
        priceRangeV2 {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        metafields(first: 2, namespace: "reviews") {
          nodes {
            key
            id
            namespace
            value
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

  const results = formatProductsResponse(response);

  return results;
};
