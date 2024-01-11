import { BlogMetadata } from '@/@types/metadata';
import Border from '@/components/layout/Border';
import { fetchBlogPageContent } from '@/shopify/content/content.model';
import ShopifyRichText from '@/shopify/content/richtext-to-html';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

export const generateMetadata = async ({
  params: { handle }
}: {
  params: { handle: string };
}) => {
  const content = await fetchBlogPageContent(handle);

  if (!content) {
    return notFound();
  }

  return {
    title: `${content.title}`
  };
};

const BlogPage: React.FC<BlogMetadata> = async ({ params: { handle } }) => {
  const content = await fetchBlogPageContent(handle);
  if (!content) return notFound();

  return (
    <div className='flex flex-col gap-12 px-4 lg:px-32 2xl:px-64'>
      <div className='mb-4'>
        <h2 className='text-2xl lg:text-4xl font-bold'>{content.title}</h2>
        <div className='flex gap-8'>
          <p className='opacity-80 italic'>By {content.author}</p>
          <p className='text-base-300 font-semibold'>
            {new Date(content.datePosted).toDateString().slice(3)}
          </p>
        </div>
        <Border />
      </div>
      <div className='flex gap-12'>
        <div className='text-left'>
          <aside className='float-right lg:pl-8 pb-8'>
            <Image
              src={content.image.url}
              alt={content.image.altText}
              height={424}
              width={640}
              className='object-cover'
            />
          </aside>
          <ShopifyRichText {...JSON.parse(content.blogContent)} options={[]} />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
