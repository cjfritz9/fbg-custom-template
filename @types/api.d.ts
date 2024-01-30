interface HeroFields {
  key: 'media';
  value: string;
  reference: {
    sources: {
      url: string;
    }[];
  };
}

interface MetaobjectField {
  value: string;
}

interface HomeMetaObjectFields {
  key: string;
  value: string;
  reference: null | MediaImageReference;
}

export interface ShopifyImage {
  url: string;
  altText: string;
}

export interface Product {
  title: string;
  handle: string;
  description: string;
  tags?: string[];
  variants: {
    nodes: { id: string; title: string }[];
  };
  includes?: {
    value: string;
  };
  specs?: {
    value: string;
  };
  images: {
    nodes: ShopifyImage[];
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

export interface MediaImageReference {
  image: ShopifyImage;
}

export interface MetaObjectReference {}

export interface HomeContentResponse {
  body: {
    data: {
      metaobjectByHandle: {
        fields: HomeMetaObjectFields[];
      };
    };
  };
}

export interface AboutContentResponse extends HomeContentResponse {
  body: {
    data: {
      metaobjectByHandle: {
        fields: any[];
      };
    };
  };
}

export interface BlogsLayoutContentResponse {
  body: {
    data: {
      metaobjectByHandle: {
        fields: {
          key: string;
          value: string;
          reference: {
            image: ShopifyImage;
          } | null;
        }[];
      };
    };
  };
}

export interface BlogsPageContentResponse {
  body: {
    data: {
      metaobjects: {
        nodes: {
          handle: string;
          title: {
            value: string;
          };
          image: {
            reference: {
              image: ShopifyImage;
            };
          };
        }[];
      };
    };
  };
}

export interface BlogPageContentResponse {
  body: {
    data: {
      metaobjectByHandle: {
        fields: {
          key: string;
          value: string;
          reference: {
            image: ShopifyImage;
          } | null;
        }[];
      };
    };
  };
}

export interface ContactPageContentResponse {
  body: {
    data: {
      metaobjectByHandle: {
        fields: {
          key: string;
          value: string;
          reference: {
            image: ShopifyImage;
          } | null;
        }[];
      };
    };
  };
}

export interface LinkCard {
  title: string;
  image: ShopifyImage;
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

export interface CustomerResponse {
  body: {
    data: {
      customerCreate: {
        customer: {
          email: string;
          id: string;
          emailMarketingConsent: {
            marketingOptInLevel: string;
            marketingState: string;
            consentUpdatedAt: string;
          };
        } | null;
        userErrors: any[];
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
            nodes: ShopifyImage[];
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
  tags?: string[];
  images: { url: string; altText: string }[];
  minPrice: string;
  reviews: {
    rating: number;
    reviewCount: number;
  };
  variants?: {
    id: string;
    title: string;
  }[];
  includes?: string[];
  specs?: string[];
}

export interface FormattedProductResponse {
  pageInfo: PageInfo;
  products: FormattedProduct[];
}

export interface PartersListResponse {
  body: {
    data: {
      metaobjectByHandle: {
        fields: {
          references: {
            nodes: {
              handle: string;
              name: {
                value: string;
              };
              logo: {
                reference: {
                  image: ShopifyImage;
                };
              };
              excerpt: {
                value: string;
              };
            }[];
          };
        }[];
      };
    };
  };
}

export interface PartnerResponse {
  body: {
    data: {
      metaobjectByHandle: {
        name: MetaobjectField;
        excerpt: MetaobjectField;
        about: MetaobjectField;
        logo: {
          reference: {
            image: ShopifyImage;
          };
        };
        hero: {
          reference: {
            image: ShopifyImage;
          };
        };
        featuredImg: {
          reference: {
            image: ShopifyImage;
          };
        };
        productsTag: MetaobjectField;
        location: MetaobjectField;
        phoneNumber?: MetaobjectField;
        email?: MetaobjectField;
        websiteUrl?: MetaobjectField;
      };
    };
  };
}
export interface PartnerResult {
  name: string;
  excerpt: string;
  about: string;
  logo: ShopifyImage;
  hero: ShopifyImage;
  featuredImage: ShopifyImage;
  productsTag: string;
  location: string;
  phoneNumber?: string;
  email?: string;
  websiteUrl?: string;
}
