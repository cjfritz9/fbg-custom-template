import Hero from '@/components/layout/Hero';
import React, { PropsWithChildren } from 'react';
import { fetchBlogsLayoutContent } from '@/shopify/content/content.model';
import { notFound } from 'next/navigation';

const BlogsLayout: React.FC<PropsWithChildren> = async ({ children }) => {
  const content = await fetchBlogsLayoutContent();
  if (!content) return notFound();

  return (
    <div>
      {content.image && (
        <Hero title={content.title} image={content.image} slim />
      )}
      <div className='flex flex-col text-primary gap-8 py-8 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-28 bg-base-100'>
        {children}
      </div>
    </div>
  );
};

export default BlogsLayout;
