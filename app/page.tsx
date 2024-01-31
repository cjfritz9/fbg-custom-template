import React, { useEffect, useState } from 'react';
import Button from '@/components/actions/Button';
import Border from '@/components/layout/Border';
import ImageWithText from '@/components/layout/ImageWithText';
import ProductGallery from '@/components/layout/ProductGallery';
import Hero from '@/components/layout/Hero';
import DevDisclaimerModal from '@/components/UI/DevDisclaimerModal';
import { getHomeContent } from './api/requests';
import { fetchHomeContent } from '@/shopify/content/content.model';

export const dynamic = 'force-dynamic'

const Home: React.FC = async () => {
  const content = await fetchHomeContent();

  return (
    <main>
      <Hero
        image={content.heroContent.image}
        title={content.heroContent.title}
        subtitle={content.heroContent.subtitle}
      />
      <Border />
      <ImageWithText
        imageSrc={content.bottomContent.image!.url}
        styles='bg-base-100 text-primary'
        reverse
      >
        <h2 className='text-2xl lg:text-3xl font-bold'>
          {content.bottomContent.title}
        </h2>
        <p className='text-md text-base-300 font-semibold'>
          {content.bottomContent.subtitle}
        </p>
        <p className='text-md lg:text-lg pt-4'>
          {content.bottomContent.paragraph}
        </p>
        <Button styles='text-white bg-base-300 mt-4 lg:!w-48' href='/blogs'>
          OUR BLOGS
        </Button>
      </ImageWithText>
      {/* <RewardsBanner /> // Commented out but left in for future use per client request */}
      <ProductGallery
        title='TOP PRODUCTS'
        subtitle='From our full kit to any piece or part, you are sure to find what you
          need.'
        productsTag='popular'
        length={5}
        link={{ name: 'SHOP NOW', slug: '/shop' }}
      />
      <ImageWithText
        styles='bg-base-100 text-primary'
        imageSrc={content.topContent.image!.url}
      >
        <h2 className='text-2xl lg:text-3xl font-bold'>
          {content.topContent.title}
        </h2>
        <p className='text-md text-base-300 font-semibold'>
          {content.topContent.subtitle}
        </p>
        <div className='flex-col'>
          <p className='text-md lg:text-lg pt-4'>
            {content.topContent.paragraph}
          </p>
        </div>
        <Button styles='text-white bg-base-300 mt-4 lg:!w-48' href='/shop'>
          SHOP NOW
        </Button>
      </ImageWithText>
      <DevDisclaimerModal />
    </main>
  );
};

export default Home;
