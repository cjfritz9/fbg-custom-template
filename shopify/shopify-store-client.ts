import { LATEST_API_VERSION } from '@shopify/shopify-api';
import Client from 'shopify-buy';

const storeClient = Client.buildClient({
  domain: process.env.SHOPIFY_SHOP_NAME!,
  storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_API_TOKEN!,
  apiVersion: LATEST_API_VERSION
})

export default storeClient;