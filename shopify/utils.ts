import {
  AboutContentResponse,
  BlogPageContentResponse,
  BlogsLayoutContentResponse,
  BlogsPageContentResponse,
  ContactPageContentResponse,
  FormattedProductResponse,
  HomeContentResponse,
  PageInfo,
  PartersListResponse,
  PartnerResponse,
  PartnerResult,
  ProductByHandleResponse,
  ProductsByQueryResponse,
  ProductsResponse,
  QueryResult
} from '@/@types/api';
import { FormattedProduct } from '@/@types/api';

// ADMIN FUNCTIONS

export const formatHomeContentResponse = (res: HomeContentResponse) => {
  const dataFields = res.body.data.metaobjectByHandle.fields;

  return {
    heroContent: {
      title: dataFields.find((field) => field.key === 'hero_title')!.value,
      subtitle: dataFields.find((field) => field.key === 'hero_subtitle')!
        .value,
      image: dataFields.find((field) => field.key === 'hero_image')!.reference!
        .image
    },
    topContent: {
      title: dataFields.find((field) => field.key === 'top_iwt_title')!.value,
      subtitle: dataFields.find((field) => field.key === 'top_iwt_sub')!.value,
      paragraph: dataFields.find((field) => field.key === 'top_iwt_p')!.value,
      image: dataFields.find((field) => field.key === 'top_iwt_img')!.reference!
        .image
    },
    bottomContent: {
      title: dataFields.find((field) => field.key === 'btm_iwt_title')!.value,
      subtitle: dataFields.find((field) => field.key === 'btm_iwt_sub')!.value,
      paragraph: dataFields.find((field) => field.key === 'btm_iwt_p')!.value,
      image: dataFields.find((field) => field.key === 'btm_iwt_img')!.reference!
        .image
    }
  };
};

export const formatAboutContentResponse = (res: AboutContentResponse) => {
  if (!res.body.data.metaobjectByHandle) return;
  const dataFields = res.body.data.metaobjectByHandle.fields;
  const linkCards = dataFields.slice(2).map((field) => ({
    title: field.reference!.fields[0].value,
    slug: field.reference!.fields[1].value,
    image: field.reference!.fields[2].reference.image
  }));
  return {
    title: dataFields.find((field) => field.key === 'hero_title')!.value,
    image: dataFields.find((field) => field.key === 'slim_hero_image')!
      .reference!.image,
    cards: linkCards
  };
};

export const formatAboutSubpageContentResponse = (
  res: AboutContentResponse
) => {
  if (!res.body.data.metaobjectByHandle) return;
  const dataFields = res.body.data.metaobjectByHandle.fields;

  return {
    title: dataFields.find((field) => field.key === 'page_title')!.value,
    image: dataFields.find((field) => field.key === 'hero_image')!.reference!
      .image
  };
};

export const formatBlogsLayoutContentResponse = (
  res: BlogsLayoutContentResponse
) => {
  if (!res.body.data.metaobjectByHandle) return;
  const pageFields = res.body.data.metaobjectByHandle.fields;

  return {
    title: pageFields.find((field) => field.key === 'hero_title')!.value,
    image: pageFields.find((field) => field.key === 'hero_image')!.reference
      ?.image
  };
};

export const formatBlogsPageContentResponse = (
  res: BlogsPageContentResponse
) => {
  if (!res.body.data.metaobjects) return;
  const blogPosts = res.body.data.metaobjects.nodes;

  return blogPosts.map((blog) => ({
    title: blog.title.value,
    slug: blog.handle,
    image: blog.image.reference.image
  }));
};

export const formatBlogPageContentResponse = (res: BlogPageContentResponse) => {
  if (!res.body.data.metaobjectByHandle) return;
  const dataFields = res.body.data.metaobjectByHandle.fields;

  return {
    image: dataFields.find((field) => field.key === 'blog_image')!.reference!
      .image,
    title: dataFields.find((field) => field.key === 'blog_title')!.value,
    subtitle: dataFields.find((field) => field.key === 'blog_subtitle')!.value,
    datePosted: dataFields.find((field) => field.key === 'date_posted')!.value,
    author: dataFields.find((field) => field.key === 'author')!.value,
    blogContent: dataFields.find((field) => field.key === 'blog_content')!.value
  };
};

export const formatContactPageContentResponse = (
  res: ContactPageContentResponse
) => {
  if (!res.body.data.metaobjectByHandle) return;
  const pageFields = res.body.data.metaobjectByHandle.fields;

  return {
    title: pageFields.find((field) => field.key === 'hero_title')!.value,
    image: pageFields.find((field) => field.key === 'hero_image')!.reference
      ?.image
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
      tags: product.tags,
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
    tags: rawProductData.tags,
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

export const formatPartnersListResponse = (res: PartersListResponse) => {
  return res.body.data.metaobjectByHandle.fields[0].references.nodes.map(
    (node) => ({
      handle: node.handle,
      name: node.name.value,
      logo: node.logo.reference.image,
      excerpt: node.excerpt.value
    })
  );
};

export const formatPartnerResponse = (res: PartnerResponse): PartnerResult => {
  return {
    name: res.body.data.metaobjectByHandle.name.value,
    excerpt: res.body.data.metaobjectByHandle.excerpt.value,
    about: res.body.data.metaobjectByHandle.about.value,
    logo: res.body.data.metaobjectByHandle.logo.reference.image,
    hero: res.body.data.metaobjectByHandle.hero.reference.image,
    featuredImage: res.body.data.metaobjectByHandle.featuredImg.reference.image,
    productsTag: res.body.data.metaobjectByHandle.productsTag.value,
    location: res.body.data.metaobjectByHandle.location.value,
    phoneNumber: res.body.data.metaobjectByHandle.phoneNumber?.value,
    email: res.body.data.metaobjectByHandle.email?.value,
    websiteUrl: res.body.data.metaobjectByHandle.websiteUrl?.value
  };
};

// STOREFRONT FUNCTIONS

export const formatAddressForGoogle = (address: string): string => {
  console.log(encodeURIComponent(address));
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
};

export const formatPhoneNumber = (phoneNumber: string): string => {
  const phoneNumberArray = [...phoneNumber];

  phoneNumberArray.splice(0, 0, '(');
  phoneNumberArray.splice(4, 0, ') ');
  phoneNumberArray.splice(8, 0, '-');

  return phoneNumberArray.join('');
};

export const formatWebsiteUrl = (websiteUrl: string): string => {
  if (websiteUrl.startsWith('https://')) {
    return websiteUrl.slice(8);
  } else {
    return websiteUrl.slice(7);
  }
};

export const validateEmail = (email: string) => {
  if (
    email.includes('.') &&
    email.includes('@') &&
    email.lastIndexOf('.') < email.length - 2
  ) {
    return { isValid: true };
  } else {
    return { isValid: false };
  }
};
