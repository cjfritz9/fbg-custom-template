import Hero from '@/components/layout/Hero';
import React, { PropsWithChildren } from 'react';
import { fetchBlogsLayoutContent } from '@/shopify/content/content.model';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'Our Blogs', template: '%s | Full Blast USA' },
  description:
    "Explore the latest insights, tips, and news in the world of firearm maintenance and cleaning on Full Blast USA's Blog. Stay informed and up-to-date with our informative articles, guides, and industry updates. Discover valuable resources to enhance your firearm maintenance knowledge. Join us on the Full Blast USA blog and stay ahead in the world of firearm care."
};

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
