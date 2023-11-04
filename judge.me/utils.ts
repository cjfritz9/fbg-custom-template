const JUDGEME_API_URL = process.env.JUDGEME_API_URL!;
const SHOP_DOMAIN = process.env.SHOPIFY_SHOP_NAME!;
const TOKEN = process.env.JUDGEME_TOKEN!;
const AUTH_QUERY_PARAMS = `shop_domain=${SHOP_DOMAIN}&api_token=${TOKEN}`;

type JudgeMeIdVariant = 'internal' | 'external';

interface NewReviewData {
  handle: string;
  name: string;
  email: string;
  rating: number;
  title: string;
  body: string;
}

export const fetchJudgeMeIdByProductHandle = async (
  type: JudgeMeIdVariant,
  handle: string
) => {
  const response = await fetch(
    `${JUDGEME_API_URL}/products/-1?${AUTH_QUERY_PARAMS}&handle=${handle}`
  );
  const result = await response.json();
  if (type === 'internal') {
    return result.product.id;
  } else {
    return result.product.external_id;
  }
};

export const fetchReviewsByProductHandle = async (
  handle: string,
  page = 1,
  perPage = 3
) => {
  const judgeMeId = await fetchJudgeMeIdByProductHandle('internal', handle);
  const response = await fetch(
    `${JUDGEME_API_URL}/reviews?${AUTH_QUERY_PARAMS}&product_id=${judgeMeId}&page=${page}&per_page=100`
  );
  const result = await response.json();

  const reviews = result.reviews.filter(
    (review: any) => review.hidden === false
  ).slice(0, perPage)

  return reviews;
};

export const postReviewByProductHandle = async (reviewData: NewReviewData) => {
  const { handle, name, email, rating, title, body } = reviewData;
  const judgeMeId = await fetchJudgeMeIdByProductHandle('external', handle);
  console.log({ judgeMeId });
  const response = await fetch(
    `${JUDGEME_API_URL}/reviews?${AUTH_QUERY_PARAMS}&platform=shopify&name=${name}&email=${email}&rating=${rating}&body=${body}&id=${judgeMeId}&title=${title}`,
    {
      method: 'POST'
    }
  );

  const result = await response.json();

  if (result.message.includes('being processed')) {
    return {
      success: true
    };
  } else {
    return {
      success: false
    };
  }
};
