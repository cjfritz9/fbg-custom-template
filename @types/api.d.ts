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
  key: 'title' | 'subtitle' | 'paragraphs';
  value: string;
}

export type ProductImage = {
  url: string[];
};

export interface Product {
  title: string;
  handle: string;
  description: string;
  images: {
    nodes: ProductImage[];
  };
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

export interface AllProductsResponse {
  body: {
    data: {
      products: {
        edges: [{ node: Product }];
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
