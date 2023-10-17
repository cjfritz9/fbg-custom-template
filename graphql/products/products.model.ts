import { AllProductsResponse, ProductByHandleResponse } from '@/@types/api';
import client from '../shopify-client';
import { formatAllProductsResponse, formatProductResponse } from '../utils';

export const getAllProducts = async () => {
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
  })) as AllProductsResponse;

  console.log(response.body.data.products.edges)

  const results = formatAllProductsResponse(response);

  return results;
};

export const getProductByHandle = async (handle: string) => {
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
