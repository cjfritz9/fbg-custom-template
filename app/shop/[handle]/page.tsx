import { ProductMetadata } from '@/@types/metadata';
import { getProductByHandle } from '@/app/api/requests';
import ReviewStars from '@/components/UI/ReviewStars';
import Button from '@/components/actions/Button';
import Border from '@/components/layout/Border';
import ProductGallery from '@/components/layout/ProductGallery';
import ProductReviews from '@/components/layout/ProductReviews';
import { Listbox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React, { Fragment } from 'react';
import { IoStar, IoBookmarkOutline, IoBook } from 'react-icons/io5';
import { TbChevronCompactUp, TbChevronCompactDown } from 'react-icons/tb';
import { HiChevronUpDown } from 'react-icons/hi2';
import ProductPanel from '@/components/layout/ProductPanel';
import ProductImages from '@/components/layout/ProductImages';

export const generateMetadata = async ({
  params: { handle }
}: {
  params: {
    handle: string;
  };
}) => {
  const product = await getProductByHandle(handle);
  if (!product) {
    notFound();
  }
  return {
    title: product.title
  };
};

const ProductPage: React.FC<ProductMetadata> = async ({
  params: { handle }
}) => {
  const product = await getProductByHandle(handle);
  const { images } = product;

  if (!product) {
    return notFound();
  }

  return (
    <main>
      <section className='flex-col lg:flex-row gap-8 text-primary inline-flex'>
        <ProductImages images={images} />
        <ProductPanel product={product} />
      </section>
      <ProductReviews handle={handle} reviews={product.reviews} />
      <section className='mt-12'>
        <ProductGallery
          title='Similar Products'
          subtitle=''
          productsTag='popular'
          length={5}
        />
      </section>
    </main>
  );
};

export default ProductPage;
