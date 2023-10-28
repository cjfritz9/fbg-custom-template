import {
  FormattedProductResponse,
  HomeContentResponse,
  PageInfo,
  ProductByHandleResponse,
  ProductsByQueryResponse,
  ProductsResponse,
  QueryResult
} from '@/@types/api';
import { FormattedProduct } from '@/@types/api';

// ADMIN FUNCTIONS

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
      )?.value,
      image: data.top.nodes[0].fields.find((field) => field.key === 'image')
        ?.reference.image.url
    },
    bottomContent: {
      title: data.bottom.nodes[0].fields.find((field) => field.key === 'title')
        ?.value,

      subtitle: data.bottom.nodes[0].fields.find(
        (field) => field.key === 'subtitle'
      )?.value,

      paragraphs: data.bottom.nodes[0].fields.find(
        (field) => field.key === 'paragraphs'
      )?.value,
      image: data.bottom.nodes[0].fields.find((field) => field.key === 'image')
        ?.reference.image.url
    }
  };
};

export const formatProductsResponse = (
  res: ProductsResponse
): FormattedProductResponse => {
  const products = <FormattedProduct[]>[];
  const rawProductsData = res.body.data.products.nodes;
  const rawPageInfo = res.body.data.products.pageInfo;

  for (const product of rawProductsData) {
    let rating = 0;
    let reviewCount = 0;
    if (product.metafields.nodes.length > 1) {
      rating = formatRating(
        product.metafields.nodes.find((node) => node.key === 'rating')!.value
      );
      reviewCount = +product.metafields.nodes.find(
        (node) => node.key === 'rating_count'
      )!.value;
    }

    products.push({
      title: product.title,
      handle: product.handle,
      description: product.description,
      images: product.images.nodes,
      minPrice: product.priceRangeV2.minVariantPrice.amount,
      reviews: {
        rating,
        reviewCount
      }
    });
  }

  const pageInfo: PageInfo = {
    hasPreviousPage: rawPageInfo.hasPreviousPage,
    hasNextPage: rawPageInfo.hasNextPage,
    startCursor: rawPageInfo.hasPreviousPage ? rawPageInfo.startCursor : null,
    endCursor: rawPageInfo.hasNextPage ? rawPageInfo.endCursor : null
  };

  return {
    pageInfo,
    products
  };
};

export const formatProductResponse = (
  res: ProductByHandleResponse
): FormattedProduct => {
  const rawProductData = res.body.data.productByHandle;

  let rating = 0;
  let reviewCount = 0;
  if (rawProductData.metafields.nodes.length > 1) {
    rating = formatRating(
      rawProductData.metafields.nodes.find((node) => node.key === 'rating')!
        .value
    );
    reviewCount = +rawProductData.metafields.nodes.find(
      (node) => node.key === 'rating_count'
    )!.value;
  }

  return {
    title: rawProductData.title,
    handle: rawProductData.handle,
    description: rawProductData.description,
    variants: rawProductData.variants?.nodes.map((variant) => ({
      id: variant.id,
      title: variant.title
    })),
    includes: JSON.parse(rawProductData.includes?.value ?? '[]'),
    specs: JSON.parse(rawProductData.specs?.value ?? '[]'),
    images: rawProductData.images.nodes,
    minPrice: rawProductData.priceRangeV2.minVariantPrice.amount,
    reviews: {
      rating,
      reviewCount
    }
  };
};

export const formatProductsByQueryResponse = (
  res: ProductsByQueryResponse
): QueryResult[] => {
  return res.body.data.products.nodes.map((result) => ({
    title: result.title,
    handle: result.handle,
    image: result.images.nodes[0].url
  }));
};

const formatRating = (ratingData: string): number => {
  const parsedRating = JSON.parse(ratingData);

  return +parsedRating.value;
};

// STOREFRONT FUNCTIONS
