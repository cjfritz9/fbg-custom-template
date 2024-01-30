import { CustomerResponse } from '@/@types/api';
import adminClient from '../shopify-admin-client';

export const postNewCustomerEmailSignup = async (email: string) => {
  const data = `mutation {
    customerCreate(input: {
      email: "${email}",
      emailMarketingConsent: {
        marketingOptInLevel:CONFIRMED_OPT_IN, 
        marketingState: SUBSCRIBED
      }
    }) {
      customer {
        email
        id
        emailMarketingConsent {
          marketingOptInLevel
          marketingState
          consentUpdatedAt
        }
      }
      userErrors {
        field
        message
      }
    }
  }`;

  const response = (await adminClient.query({ data })) as CustomerResponse;
  if (response && response.body.data.customerCreate.userErrors[0]) {
    return {
      success: false,
      customer: response.body.data.customerCreate.customer,
      error: response.body.data.customerCreate.userErrors[0]
    };
  } else {
    return {
      success: true,
      customer: response.body.data.customerCreate.customer,
      error: null
    };
  }
};
