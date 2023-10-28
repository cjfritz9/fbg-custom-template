import { HomeContentResponse } from '@/@types/api';
import adminClient from '../shopify-admin-client';
import { formatHomeContentResponse } from '../utils';

export const fetchHomeContent = async () => {
  const data = `{
    hero: metaobjects(type: "video_hero", first: 1) {
      nodes {
        fields {
          key
          value
          reference {
            ... on Video{
              sources {
                url
              }
            }
          }
        }
      }
    }
    top: metaobjects(type: "home_page_top_content_section", first: 1) {
      nodes {
        fields {
          key
          value
          reference {
            ... on MediaImage{
              image {
                altText
                url
              }
            }
          }
        }
      }
    }
    bottom: metaobjects (type: "home_page_bottom_content_section", first: 1) {
      nodes {
        fields {
          key
          value
          reference {
            ... on MediaImage{
              image {
                altText
                url
              }
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
