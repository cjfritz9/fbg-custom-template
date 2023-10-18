import React from 'react';
import Button from '@/components/actions/Button';
import Border from '@/components/layout/Border';
import ImageWithText from '@/components/layout/ImageWithText';
import ProductGallery from '@/components/layout/ProductGallery';
import RewardsBanner from '@/components/layout/RewardsBanner';
import VideoHero from '@/components/layout/VideoHero';
import productImage from '@/public/assets/images/fbg-cleaning-system-E.webp';
import placeholderImage from '@/public/assets/images/fbg-placeholder.webp';
import { getHomeContent } from './api/requests';

const Home: React.FC = async () => {
  const content = await getHomeContent();

  return (
    <main>
      <VideoHero videoUrl={content.videoUrl} />
      <Border />
      <ImageWithText
        styles='bg-neutral text-primary'
        imageSrc={productImage}
        reverse
      >
        <h2 className='text-3xl font-bold'>
          {content.topContent.title}
        </h2>
        <p className='text-md text-secondary font-semibold'>
          {content.topContent.subtitle}
        </p>
        <div className='flex-col'>
          <p className='text-md pt-4'>{content.topContent.paragraphs}</p>
        </div>
        <Button styles='btn-secondary mt-4'>BUY NOW</Button>
      </ImageWithText>
      <RewardsBanner />
      <ProductGallery />
      <ImageWithText
        imageSrc={placeholderImage}
        styles='bg-neutral text-primary'
      >
        <h2 className='text-3xl font-bold'>{content.bottomContent.title}</h2>
        <p className='text-md text-secondary font-semibold'>
          {content.bottomContent.subtitle}
        </p>
        <p className='text-md pt-4'>{content.bottomContent.paragraphs}</p>
      </ImageWithText>
    </main>
  );
};

export default Home;
