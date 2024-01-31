import Image from 'next/image';
import React from 'react';
import brandImage from '@/public/assets/images/patrio-gear-brand.webp';
import ProductGallery from '@/components/layout/ProductGallery';
import Link from 'next/link';
import Hero from '@/components/layout/Hero';
import { PartnerMetadata } from '@/@types/metadata';
import { fetchPartnerByHandle } from '@/shopify/content/content.model';
import { notFound } from 'next/navigation';
import ShopifyRichText from '@/shopify/content/richtext-to-html';
import {
  formatAddressForGoogle,
  formatPhoneNumber,
  formatWebsiteUrl
} from '@/shopify/utils';
import Breadcrumbs from '@/components/actions/Breadcrumbs';

const PartnerPage: React.FC<PartnerMetadata> = async ({
  params: { handle }
}) => {
  const content = await fetchPartnerByHandle(handle);
  if (!content) return notFound();

  return (
    <div>
      <Hero title={content.name} image={content.hero} slim />
      <div className='flex flex-col text-primary gap-8 py-8 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-28 bg-base-100'>
        <Breadcrumbs />

        <main className='pb-4 bg-base-100'>
          <section className='flex gap-16'>
            <Image
              src={content.featuredImage.url}
              alt={content.featuredImage.altText}
              height={660}
              width={440}
              className='hidden lg:block object-cover object-center'
            />
            <div className='flex flex-col gap-8'>
              <ShopifyRichText {...JSON.parse(content.about)} options={[]} />
            </div>
          </section>
          <section className='py-8 text-blue-600 text-lg'>
            <p className='font-bold text-primary'>Patriot Gear Co.</p>
            <Link
              href={formatAddressForGoogle(content.location)}
              target='_blank'
            >
              <p>{content.location}</p>
            </Link>
            {content.phoneNumber && (
              <Link href={`tel: ${content.phoneNumber}`} target='_blank'>
                <p>{formatPhoneNumber(content.phoneNumber)}</p>
              </Link>
            )}
            {content.email && (
              <Link href={`mailto: ${content.email}`} target='_blank'>
                <p>{content.email}</p>
              </Link>
            )}
            {content.websiteUrl && (
              <Link href={content.websiteUrl} target='_blank'>
                <p>{formatWebsiteUrl(content.websiteUrl)}</p>
              </Link>
            )}
          </section>
          <section className='my-16'>
            <ProductGallery
              length={8}
              productsTag={content.productsTag}
              title={`Products by ${content.name}`}
              subtitle=''
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default PartnerPage;
