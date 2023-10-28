import { HomeContentResponse } from '@/@types/api';
import adminClient from '../shopify-admin-client';
import {
  formatAboutContentResponse,
  formatHomeContentResponse
} from '../utils';

export const fetchHomeContent = async () => {
  const data = `{
    metaobjectByHandle(handle: {type: "home_page", handle: "home-page-content"}) {
      fields {
        key
        value
        reference {
          ... on MediaImage {
            image {
              url
              altText
            }
          }
        }
      }
    }
  }`;
  const response = (await adminClient.query({
    data
  })) as HomeContentResponse;

  const result = formatHomeContentResponse(response);

  return result;
};

export const fetchAboutContent = async () => {
  const data = `{
    metaobjectByHandle(handle: {type: "about_page", handle: "about-page-content"}) {
      fields {
        key
        value
        reference {
          ... on Metaobject {
            fields {
              key
              value
              reference {
                ... on MediaImage {
                  image {
                    url
                    altText
                  }
                }
              }
            }
          }
          ... on MediaImage {
            image {
              url
              altText
            }
          }
        }
      }
    }
  }`;
  const response = (await adminClient.query({
    data
  })) as HomeContentResponse;

  const result = formatAboutContentResponse(response);

  return result;
};
