import {
  AboutContentResponse,
  BlogPageContentResponse,
  BlogsLayoutContentResponse,
  BlogsPageContentResponse,
  ContactPageContentResponse,
  HomeContentResponse,
  PartersListResponse,
  PartnerResponse,
  PartnerResult
} from '@/@types/api';
import adminClient from '../shopify-admin-client';
import {
  formatAboutContentResponse,
  formatAboutSubpageContentResponse,
  formatBlogPageContentResponse,
  formatBlogsLayoutContentResponse,
  formatBlogsPageContentResponse,
  formatContactPageContentResponse,
  formatHomeContentResponse,
  formatPartnerResponse,
  formatPartnersListResponse
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

  console.log(response)

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
  }`;

  const response = (await adminClient.query({
    data
  })) as BlogsPageContentResponse;

  const result = formatBlogsPageContentResponse(response);

  return result;
};

export const fetchBlogPageContent = async (handle: string) => {
  const data = `{
    metaobjectByHandle(handle: {type: "blog_post", handle: "${handle}"}){
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
  })) as BlogPageContentResponse;

  const result = formatBlogPageContentResponse(response);

  return result;
};

export const fetchContactLayoutContent = async () => {
  const data = `{
    metaobjectByHandle(handle: {type: "contact_page", handle: "contact"}) {
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
  })) as ContactPageContentResponse;

  const result = formatContactPageContentResponse(response);

  return result;
};

export const fetchPartnersList = async () => {
  const data = `{
    metaobjectByHandle(handle: {type: "partners", handle: "partners-list" }) {
      fields {
        key
        value
        references(first: 12) {
          nodes {
            ... on Metaobject {
              handle
              name: field(key: "name") {
                value
              }
              logo: field (key: "logo") {
                reference {
                  ... on MediaImage {
                    image {
                      altText
                      url
                    }
                  }
                }
              }
              excerpt: field (key: "excerpt") {
                value
              }
            }
          }
        }
      }
    }
  }`;

  const response = (await adminClient.query({ data })) as PartersListResponse;

  const result = formatPartnersListResponse(response);

  return result;
};

export const fetchPartnerByHandle = async (
  handle: string
): Promise<PartnerResult> => {
  const data = `{
    metaobjectByHandle(handle: {type: "product_partner", handle: "${handle}"}) {
      name: field(key: "name") {
        value
      }
      excerpt: field(key: "excerpt") {
        value
      }
      about: field(key: "about_the_partner") {
        value
      }
      logo: field(key: "logo") {
        reference {
          ... on MediaImage {
            image {
              altText
              url
            }
          }
        }
      }
      hero: field(key: "banner_image") {
        reference {
          ... on MediaImage {
            image {
              altText
              url
            }
          }
        }
      }
      featuredImg: field(key: "featured") {
        reference {
          ... on MediaImage {
            image {
              altText
              url
            }
          }
        }
      }
      productsTag: field(key: "products_tag") {
        value
      }
      location: field(key: "location") {
        value
      }
      phoneNumber: field(key: "phone_number") {
        value
      }
      email: field(key: "email") {
        value
      }
      websiteUrl: field(key: "website_url") {
        value
      }
    }
  }`;

  const response = (await adminClient.query({ data })) as PartnerResponse;

  const result = formatPartnerResponse(response);

  return result;
};
