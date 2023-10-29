import React from 'react'
import { AboutSubpageLayoutProps } from '@/@types/props';
import { fetchAboutSubpageContent } from '@/shopify/content/content.model';
import Hero from '@/components/layout/Hero';
import { notFound } from 'next/navigation';

const AboutSubpageLayout: React.FC<AboutSubpageLayoutProps> = async ({ children, params: { subpage } }) => {
  const content = await fetchAboutSubpageContent(subpage);
  if (!content) return notFound();
  
  return (
    <div>
      <Hero title={content.title} image={content.image} slim />
      {children}
    </div>
  );
}

export default AboutSubpageLayout;