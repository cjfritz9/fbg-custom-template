import {
  FormattedProduct,
  FormattedProductResponse,
  PartnerResult,
  QueryResult
} from '@/@types/api';
import { FilterMethods, NewReviewData } from '@/@types/shop';
import { formatPartnerResponse } from '@/shopify/utils';
import { cache } from 'react';
import ShopifyBuy from 'shopify-buy';

export const CACHE_TAG_PRODUCTS = 'products';
export const CACHE_TAG_METAOBJECTS = 'metaobjects';

export const getHomeContent = cache(async () => {
  const response = await fetch(`${process.env.BASE_API_URL}/content/home`, {
    next: {
      tags: [CACHE_TAG_METAOBJECTS]
    }
  });
  const result = await response.json();

  return result;
});

export const getAboutContent = cache(async () => {
  const response = await fetch(`${process.env.BASE_API_URL}/content/about`, {
    next: {
      tags: [CACHE_TAG_METAOBJECTS]
    }
  });
  const result = await response.json();

  return result;
});

export const getProducts = cache(
  async (): Promise<FormattedProductResponse> => {
    const response = await fetch(`/api/products`, {
      next: {
        tags: [CACHE_TAG_PRODUCTS]
      }
    });
    const results = await response.json();

    return results;
  }
);

export const getPaginatedProducts = cache(
  async (query: string): Promise<FormattedProductResponse> => {
    const response = await fetch(`/api/products?${query}`, {
      next: {
        tags: [CACHE_TAG_PRODUCTS]
      }
    });
    const results = await response.json();

    return results;
  }
);

export const getProductByHandle = cache(
  async (handle: string): Promise<FormattedProduct | undefined> => {
    const response = await fetch(
      `${process.env.BASE_API_URL}/products/${handle}`,
      {
        next: {
          tags: [CACHE_TAG_PRODUCTS]
        }
      }
    );

    if (response) {
      const result = await response.json();
      return result;
    }
  }
);

export const getProductsByTag = cache(
  async (tag: FilterMethods): Promise<FormattedProductResponse | undefined> => {
    const response = await fetch(`/api/products/tags/${tag}`, {
      next: {
        tags: [CACHE_TAG_PRODUCTS]
      }
    });
    if (response) {
      const results = await response.json();
      return results;
    }
  }
);

export const getProductsByQuery = cache(
  async (query: string): Promise<QueryResult[]> => {
    const response = await fetch(`/api/products/search?query=${query}`, {
      next: {
        tags: [CACHE_TAG_PRODUCTS]
      }
    });
    const results = await response.json();

    return results;
  }
);

export const getReviewsByProductHandle = cache(
  async (handle: string): Promise<any> => {
    const response = await fetch(
      `/api/reviews?handle=${handle}&page=1&perPage=1000`,
      {
        next: {
          tags: [CACHE_TAG_PRODUCTS]
        }
      }
    );

    const results = await response.json();

    return results;
  }
);

export const createReviewByProductHandle = cache(
  async (reviewData: NewReviewData): Promise<any> => {
    const response = await fetch(`/api/reviews?handle=${reviewData.handle}`, {
      method: 'POST',
      body: JSON.stringify(reviewData),
      next: {
        tags: [CACHE_TAG_PRODUCTS]
      }
    });
    const results = await response.json();

    return results;
  }
);

export const getCheckout = cache(
  async (checkoutId: string): Promise<ShopifyBuy.Checkout> => {
    const response = await fetch(`/api/checkout?id=${checkoutId}`);
    const result = await response.json();

    return result;
  }
);

export const createCheckout = cache(async (): Promise<ShopifyBuy.Checkout> => {
  const response = await fetch(`/api/checkout`, {
    method: 'POST'
  });
  const result = await response.json();

  return result;
});

export const addItemsToCheckout = cache(
  async (
    checkoutId: string,
    lineItems: any[]
  ): Promise<ShopifyBuy.Checkout> => {
    const response = await fetch(`/api/checkout/add-items?id=${checkoutId}`, {
      method: 'POST',
      body: JSON.stringify({ lineItems })
    });
    const result = await response.json();

    return result;
  }
);

export const removeItemsFromCheckout = cache(
  async (
    checkoutId: string,
    lineItemIds: string[]
  ): Promise<ShopifyBuy.Checkout> => {
    const response = await fetch(
      `/api/checkout/remove-items?id=${checkoutId}`,
      {
        method: 'DELETE',
        body: JSON.stringify({ lineItemIds })
      }
    );
    const result = await response.json();

    return result;
  }
);

export const updateItemsInCheckout = cache(
  async (
    checkoutId: string,
    lineItems: ShopifyBuy.CheckoutLineItemUpdateInput[]
  ): Promise<ShopifyBuy.Checkout> => {
    const response = await fetch(
      `/api/checkout/remove-items?id=${checkoutId}`,
      {
        method: 'PATCH',
        body: JSON.stringify({ lineItems })
      }
    );
    const result = await response.json();

    return result;
  }
);

export const postCaptchaResult = cache(async (token: string): Promise<any> => {
  const response = await fetch('/api/auth/recaptcha', {
    method: 'POST',
    body: JSON.stringify(token)
  });

  const result = await response.json();

  return result;
});

export const postMail = cache(async (mailData: any): Promise<any> => {
  const response = await fetch('/api/mail', {
    method: 'POST',
    body: JSON.stringify(mailData)
  });

  const result = await response.json();

  return result;
});

export const getPartners = cache(async () => {
  const response = await fetch('/api/partners', {
    next: {
      tags: [CACHE_TAG_METAOBJECTS]
    }
  });

  const result = await response.json();

  return result;
});

export const getPartnerByHandle = cache(
  async (handle: string): Promise<PartnerResult> => {
    const response = await fetch(`/api/partners/${handle}`, {
      next: {
        tags: [CACHE_TAG_METAOBJECTS]
      }
    });

    const result = await response.json();

    return result;
  }
);
