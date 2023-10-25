import { ProductMetadata } from '@/@types/metadata';
import { getProductByHandle } from '@/app/api/requests';
import ReviewStars from '@/components/UI/ReviewStars';
import Button from '@/components/actions/Button';
import Border from '@/components/layout/Border';
import ProductGallery from '@/components/layout/ProductGallery';
import ProductReviews from '@/components/layout/ProductReviews';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { IoStar, IoBookmarkOutline, IoBook } from 'react-icons/io5';
import { TbChevronCompactUp, TbChevronCompactDown } from 'react-icons/tb';

export const generateMetadata = async ({
  params: { handle }
}: ProductMetadata) => {
  const product = await getProductByHandle(handle);

  if (!product) {
    return notFound();
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
        <div className='flex flex-col gap-8 max-w-[40rem]'>
          <div>
            <h2 className='text-4xl font-bold'>{product.title}</h2>
            <ReviewStars
              reviews={product.reviews}
              styles='!text-2xl'
              showCount
            />
          </div>
          <Border />
          <div className='flex flex-col gap-4 py-4 -my-4 xl:sticky xl:top-0 bg-base-100'>
            <h4 className='text-2xl xl:text-3xl font-bold tracking-widest'>
              ${product.minPrice}
            </h4>
            <div className='flex gap-4 '>
              <Button styles='btn-primary grow h-16 font-bold text-lg fixed bottom-0 -mx-4 z-30 xl:static xl:mx-0'>
                ADD TO CART
              </Button>
              <div
                className='hidden xl:inline-block tooltip'
                data-tip='Bookmark this item'
              >
                <Button styles='btn-base-200 border border-primary h-16 font-bold text-2xl !w-24 hover:bg-base-100'>
                  <IoBookmarkOutline />
                </Button>
              </div>
            </div>
          </div>
          <Border />
          <div>
            <p className='uppercase font-semibold text-xl pb-4'>DESCRIPTION</p>
            <div className='custom-scroll overflow-y-auto text-lg'>
              <p>{product.description}</p>
            </div>
          </div>
          {product.includes && product.includes.length > 0 && (
            <>
              <Border />
              <div>
                <p className='uppercase font-semibold text-xl pb-4'>INCLUDES</p>
                <ul className='custom-scroll list-disc pl-5 overflow-y-auto text-lg'>
                  {product.includes.map((listItem, i) => (
                    <li key={i}>{listItem}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
          {product.specs && product.specs.length > 0 && (
            <>
              <Border />
              <div>
                <p className='uppercase font-semibold text-xl pb-4'>Specs</p>
                <ul className='custom-scroll list-disc pl-5 overflow-y-auto text-lg'>
                  {product.specs.map((listItem, i) => (
                    <li key={i}>{listItem}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
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
