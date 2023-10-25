interface HeroFields {
  key: 'media';
  value: string;
  reference: {
    sources: {
      url: string;
    }[];
  };
}

interface ImageWithTextFields {
  key: 'title' | 'subtitle' | 'paragraphs' | 'image';
  value: string;
  reference: {
    image: {
      url: string;
    };
  };
}

export type ProductImage = {
  url: string;
  altText: string;
};

export interface Product {
  title: string;
  handle: string;
  description: string;
  includes?: {
    value: string;
  }
  specs?: {
    value: string;
  }
  images: {
    nodes: ProductImage[];
  };
  priceRangeV2: {
    minVariantPrice: {
      amount: string;
      currencyCode: 'USD';
    };
  };
  metafields: {
    nodes: {
      key: 'rating' | 'rating_count';
      value: string;
    }[];
  };
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
  endCursor: string | null;
}

export interface QueryResult {
  title: string;
  handle: string;
  image: string;
}

export interface HomeContentResponse {
  body: {
    data: {
      hero: {
        nodes: [
          {
            fields: HeroFields[];
          }
        ];
      };
      top: {
        nodes: [
          {
            fields: ImageWithTextFields[];
          }
        ];
      };
      bottom: {
        nodes: [
          {
            fields: ImageWithTextFields[];
          }
        ];
      };
    };
  };
}

export interface ProductsResponse {
  body: {
    data: {
      products: {
        nodes: Product[];
        pageInfo: PageInfo;
      };
    };
  };
}

export interface ProductByHandleResponse {
  body: {
    data: {
      productByHandle: Product;
    };
  };
}

export interface ProductsByQueryResponse {
  body: {
    data: {
      products: {
        nodes: {
          title: string;
          handle: string;
          images: {
            nodes: ProductImage[];
          };
        }[];
      };
    };
  };
}

export interface FormattedProduct {
  title: string;
  handle: string;
  description: string;
  includes?: string[];
  specs?: string[];
  images: { url: string; altText: string }[];
  minPrice: string;
  reviews: {
    rating: number;
    reviewCount: number;
  };
}

export interface FormattedProductResponse {
  pageInfo: PageInfo;
  products: FormattedProduct[];
}
