import { AllProductsResponse, ProductByHandleResponse } from "@/@types/api";
import client from "../shopify-client";

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
              url
            }
          }
        }
      }
    }
  }`
  const response = (await client.query({
    data
  })) as AllProductsResponse;

  const results = response.body.data.products.edges

  return results;
}

export const getProductByHandle = async (handle: string) => {
  const data = `{
    productByHandle(handle: "${handle}") {
      title
      handle
      description
      images(first: 10) {
        nodes {
          url
        }
      }
    }
  }`
  const response = (await client.query({
    data
  })) as ProductByHandleResponse;

  const result = response.body.data.productByHandle

  return result;
}