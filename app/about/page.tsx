import React from 'react';
import Image from 'next/image';
import PageLinkCards from '@/components/layout/PageLinkCards';
import { fetchAboutContent } from '@/shopify/content/content.model';
import Hero from '@/components/layout/Hero';
import { notFound } from 'next/navigation';

const AboutPage: React.FC = async () => {
  const content = await fetchAboutContent();
  if (!content) return notFound();

  return (
    <main className='bg-base-100'>
      <Hero title={content.title} image={content.image} slim />
      <section className='py-16 px-8 bg-base-200'>
        <div className='flex flex-col-reverse xl:flex-row justify-between h-fit gap-8'>
          <PageLinkCards cards={content.cards} />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
