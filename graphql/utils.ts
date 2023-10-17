import { AllProductsResponse, HomeContentResponse, ProductByHandleResponse } from '@/@types/api';

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

export const formatAllProductsResponse = (res: AllProductsResponse) => {
  const products = []
  const rawProductsData = res.body.data.products.edges;

  for (const product of rawProductsData) {
    products.push({
      title: product.node.title,
      handle: product.node.handle,
      description: product.node.description,
      images: product.node.images.nodes
    })
  }

  return products;
}

export const formatProductResponse = (res: ProductByHandleResponse) => {
  const rawProductData = res.body.data.productByHandle;

  return {
    title: rawProductData.title,
    handle: rawProductData.handle,
    description: rawProductData.description,
    images: rawProductData.images.nodes
  }
}