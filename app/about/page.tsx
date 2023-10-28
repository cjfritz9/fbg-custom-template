import React from 'react';
import { getAboutContent } from '../api/requests';
import Image from 'next/image';
import PageLinkCards from '@/components/layout/PageLinkCards';

const AboutPage: React.FC = async () => {
  const content = await getAboutContent();

  return (
    <main className='bg-base-100'>
      <div className='flex w-full justify-center items-center bg-accent relative'>
        <h1 className='text-6xl font-bold absolute text-white uppercase top-16 z-10'>
          {content.heroContent.title}
        </h1>
        <Image
          src={content.heroContent.image.url}
          alt={content.heroContent.image.altText}
          height={320}
          width={1920}
          className='object-cover object-center hover:brightness:100'
        />
      </div>
      <section className='py-8 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-28 bg-base-200'>
        <div className='flex flex-col-reverse xl:flex-row justify-between h-fit gap-8'>
          <PageLinkCards cards={content.cards} />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
