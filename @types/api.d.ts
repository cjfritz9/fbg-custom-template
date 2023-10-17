interface ImageWithTextFields {
  key: 'title' | 'subtitle' | 'paragraphs';
  value: string;
}

export type ProductImage = {
  url: string[];
};

export interface Product {
  node: {
    title: string;
    handle: string;
    description: string;
    images: {
      nodes: ProductImage[];
    };
  };
}

export interface HomeContentResponse {
  body: {
    data: {
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
        edges: Product[];
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
