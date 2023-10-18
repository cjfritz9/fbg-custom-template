import { ProductByHandleResponse, ProductsByTagResponse, ProductsResponse } from '@/@types/api';
import client from '../shopify-client';
import { formatProductResponse, formatProductsByTagResponse, formatProductsResponse } from '../utils';
import { FormattedProduct } from '@/@types/context';

export const fetchAllProducts = async () => {
  const data = `{
    products (first: 10) {
      edges {
        node {
          title
          handle
          description
          images (first: 10) {
            nodes {
              altText
              url
            }
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
): Promise<FormattedProduct[]> => {
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
  })) as ProductsByTagResponse;

  const results = formatProductsByTagResponse(response);

  return results;
};
