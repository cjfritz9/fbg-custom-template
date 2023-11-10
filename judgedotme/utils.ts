const API_URL = process.env.JUDGEME_API_URL!;
const SHOP_DOMAIN = process.env.SHOPIFY_SHOP_NAME!;
const TOKEN = process.env.JUDGEME_TOKEN!;
const AUTH_QUERY_PARAMS = `shop_domain=${SHOP_DOMAIN}&api_token=${TOKEN}`

export const fetchJudgeMeIdByProductHandle = async (handle: string) => {
  const response = await fetch(
    `${API_URL}/products/v1?${AUTH_QUERY_PARAMS}&handle=${handle}`
  )
  const result = await response.json();
  return result.product.id;
}

export const fetchReviewsByProductHandle = async (handle: string, page = 1, perPage = 3) => {
  const judgeMeId = await fetchJudgeMeIdByProductHandle(handle);
  const response = await fetch(
    `${API_URL}/reviews?${AUTH_QUERY_PARAMS}&product_id=${judgeMeId}&page=${page}&per_page=${perPage}`
  );
  const result = await response.json();

  const reviews = result.reviews.filter(
    (review: any) => review.hidden === false
  );

  return reviews;
};
