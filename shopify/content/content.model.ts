import { AboutContentResponse, BlogsLayoutContentResponse, BlogsPageContentResponse, HomeContentResponse } from '@/@types/api';
import adminClient from '../shopify-admin-client';
import {
  formatAboutContentResponse,
  formatAboutSubpageContentResponse,
  formatBlogsLayoutContentResponse,
  formatBlogsPageContentResponse,
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
  })) as AboutContentResponse;

  const result = formatAboutContentResponse(response);

  return result;
};

export const fetchAboutSubpageContent = async (handle: string) => {
  const data = `{
    metaobjectByHandle(handle: {type: "about_subpage", handle: "${handle}"}) {
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
  })) as AboutContentResponse;

  const result = formatAboutSubpageContentResponse(response);

  return result;
};

export const fetchBlogsLayoutContent = async () => {
  const data = `{
    metaobjectByHandle(handle: {type: "blogs_page", handle: "blogs"}) {
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
    metaobjects(type: "blog_post", first: 12) {
      nodes {
        handle
        title: field (key: "blog_title") {
          value
        }
        image: field(key: "blog_image") {
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
    }
  }`;

  const response = (await adminClient.query({
    data
  })) as BlogsLayoutContentResponse;

  const result = formatBlogsLayoutContentResponse(response);

  return result;
};

export const fetchBlogsPageContent = async () => {
  const data = `{
    metaobjects(type: "blog_post", first: 12) {
      nodes {
        handle
        title: field (key: "blog_title") {
          value
        }
        image: field(key: "blog_image") {
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
    }
  }`

  const response = (await adminClient.query({
    data
  })) as BlogsPageContentResponse;

  const result = formatBlogsPageContentResponse(response);

  return result;
}