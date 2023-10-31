import Hero from '@/components/layout/Hero';
import { fetchContactLayoutContent } from '@/shopify/content/content.model';
import { notFound } from 'next/navigation';
import React from 'react';

const ContactPage: React.FC = async () => {
  const content = await fetchContactLayoutContent();
  if (!content) return notFound();
  return (
    <div>
      {content.image && (
        <Hero title={content.title} image={content.image} slim />
      )}
    </div>
  );
};

export default ContactPage;
