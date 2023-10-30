import PageLinkCards from '@/components/layout/PageLinkCards';
import { fetchBlogsPageContent } from '@/shopify/content/content.model';
import React from 'react';

const BlogsPage: React.FC = async () => {
  const blogs = await fetchBlogsPageContent();

  if (!blogs) return;

  return (
    <section className='py-16 px-8'>
      <div className='flex flex-col-reverse xl:flex-row justify-between h-fit gap-8'>
        <PageLinkCards
          slugPrefix='blogs'
          textSize='2xl'
          cards={blogs}
          showButton
        />
      </div>
    </section>
  );
};

export default BlogsPage;
