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
        <div className='flex flex-col-reverse xl:flex-row justify-between h-fit xl:top-16 xl:sticky gap-8'>
          <div className='flex flex-col justify-between'>
            <div className='flex flex-row xl:flex-col gap-4'>
              <Button styles='bg-base-100 border-0 !w-full -mb-4 hover:bg-base-100 hidden xl:flex'>
                <TbChevronCompactUp className='text-4xl text-base-200' />
              </Button>
              {images.slice(0, 4).map((image) => (
                <Image
                  key={image.url}
                  src={image.url}
                  alt={image.altText}
                  height={256}
                  width={256}
                  className='w-24 xl:w-32 h-24 xl:h-32 object-cover'
                />
              ))}
            </div>
            <Button styles='bg-base-100 border-0 !w-full -mt-4 hover:bg-base-100 hidden xl:flex'>
              <TbChevronCompactDown className='text-4xl text-base-200' />
            </Button>
          </div>
          <div className='flex justify-center max-h-[556px] xl:w-[720px]'>
            <Image
              priority
              src={images[0].url}
              alt={images[0].altText}
              height={800}
              width={800}
              className='object-cover object-center w-full h-auto max-h-[556px]'
            />
          </div>
        </div>
        <ProductPanel product={product} />
      </section>
      <ProductReviews handle={handle} reviews={product.reviews} />
      <section className='mt-12'>
        <ProductGallery
          title='Similar Products'
          subtitle=''
          productsTag='top products'
          length={5}
        />
      </section>
    </main>
  );
};

export default ProductPage;
