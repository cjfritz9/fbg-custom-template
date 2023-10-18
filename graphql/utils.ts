import {
  FormattedProductResponse,
  HomeContentResponse,
  ProductByHandleResponse,
  ProductsResponse
} from '@/@types/api';
import { FormattedProduct } from '@/@types/api'; 

export const formatHomeContentResponse = (res: HomeContentResponse) => {
  const data = res.body.data;
  return {
    videoUrl: data.hero.nodes[0].fields[0].reference.sources[0].url,
    topContent: {
      title: data.top.nodes[0].fields.find((field) => field.key === 'title')
        ?.value,

      subtitle: data.top.nodes[0].fields.find(
        (field) => field.key === 'subtitle'
      )?.value,

      paragraphs: data.top.nodes[0].fields.find(
        (field) => field.key === 'paragraphs'
      )?.value
    },
    bottomContent: {
      title: data.top.nodes[0].fields.find((field) => field.key === 'title')
        ?.value,

      subtitle: data.top.nodes[0].fields.find(
        (field) => field.key === 'subtitle'
      )?.value,

      paragraphs: data.top.nodes[0].fields.find(
        (field) => field.key === 'paragraphs'
      )?.value
    }
  };
};

export const formatProductsResponse = (
  res: ProductsResponse
): FormattedProductResponse => {
  const products = <FormattedProduct[]>[];
  const rawProductsData = res.body.data.products.nodes;

  for (const product of rawProductsData) {
    products.push({
      title: product.title,
      handle: product.handle,
      description: product.description,
      images: product.images.nodes
    });
  }

  return {
    pageInfo: res.body.data.products.pageInfo,
    products
  }
};

export const formatProductResponse = (res: ProductByHandleResponse) => {
  const rawProductData = res.body.data.productByHandle;

  return {
    title: rawProductData.title,
    handle: rawProductData.handle,
    description: rawProductData.description,
    images: rawProductData.images.nodes
  };
};

// export const formatProductsByTagResponse = (res: ProductsResponse): FormattedProduct[] => {
//   const products = <FormattedProduct[]>[];
//   const rawProductsData = res.body.data.products.nodes;

//   for (const product of rawProductsData) {
//     products.push({
//       title: product.title,
//       handle: product.handle,
//       description: product.description,
//       images: product.images.nodes
//     });
//   }

//   return products;
// }