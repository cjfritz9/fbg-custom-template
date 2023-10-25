import React from 'react';
import Button from '@/components/actions/Button';
import Border from '@/components/layout/Border';
import ImageWithText from '@/components/layout/ImageWithText';
import ProductGallery from '@/components/layout/ProductGallery';
import RewardsBanner from '@/components/layout/RewardsBanner';
import VideoHero from '@/components/layout/VideoHero';
import { fetchHomeContent } from '@/shopify/content/content.model';

const Home: React.FC = async () => {
  const content = await fetchHomeContent();

  return (
    <main>
      <VideoHero videoUrl={content.videoUrl} />
      <Border />
      <ImageWithText
        styles='bg-base-100 text-primary'
        imageSrc={content.topContent.image!}
        reverse
      >
        <h2 className='text-2xl lg:text-3xl font-bold'>
          {content.topContent.title}
        </h2>
        <p className='text-md text-secondary font-semibold'>
          {content.topContent.subtitle}
        </p>
        <div className='flex-col'>
          <p className='text-md lg:text-lg pt-4'>
            {content.topContent.paragraphs}
          </p>
        </div>
        <Button styles='btn-primary mt-4 lg:!w-48' href='/shop'>
          SHOP NOW
        </Button>
      </ImageWithText>
      <RewardsBanner />
      <ProductGallery
        title='TOP PRODUCTS'
        subtitle='From our full kit to any piece or part, you are sure to find what you
          need.'
        productsTag='top products'
        length={5}
        link={{ name: 'SHOP NOW', slug: '/shop' }}
      />
      <ImageWithText
        imageSrc={content.bottomContent.image!}
        styles='bg-base-100 text-primary'
      >
        <h2 className='text-2xl lg:text-3xl font-bold'>
          {content.bottomContent.title}
        </h2>
        <p className='text-md text-secondary font-semibold'>
          {content.bottomContent.subtitle}
        </p>
        <p className='text-md lg:text-lg pt-4'>
          {content.bottomContent.paragraphs}
        </p>
        <Button styles='btn-primary mt-4 lg:!w-48' href='/blogs'>
          OUR BLOGS
        </Button>
      </ImageWithText>
    </main>
  );
};

export default Home;
