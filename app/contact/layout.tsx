import Hero from '@/components/layout/Hero';
import { fetchContactLayoutContent } from '@/shopify/content/content.model';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

export const metadata: Metadata = {
  title: { default: 'Contact Us', template: '%s | Full Blast USA' },
  description:
    "Reach out to Full Blast USA through our Contact page. We're here to answer your questions and provide assistance. Whether you have inquiries about our products, need support, or want to collaborate, our team is ready to assist you. Contact us today to get in touch with the firearm cleaning experts at Full Blast USA."
};

const ContactLayout: React.FC<React.PropsWithChildren> = async ({
  children
}) => {
  const content = await fetchContactLayoutContent();
  if (!content) return notFound();

  return (
    <div>
      {content.image && (
        <Hero title={content.title} image={content.image} slim />
      )}
      <div className='flex flex-col text-primary gap-8 py-8 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-28 bg-base-200'>
        {children}
      </div>
    </div>
  );
};

export default ContactLayout;
