'use client';

import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { FormattedProduct } from '@/@types/api';
import { getProductsByTag } from '@/app/api/requests';
import Image from 'next/image';
import { SlideContainerProps } from '@/@types/props';

/** Uses Swiper.js under the hood, making use of
 *  the Autoplay and Pagination modules, fully
 *  configurable.
 *
 *  https://swiperjs.com/react
 */
const ProductGallery: React.FC = () => {
  const [products, setProducts] = useState<FormattedProduct[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getProductsByTag('top products');
      const { products: topProducts } = response;
      setProducts(topProducts.slice(0, 5));
    })();
  }, []);

  return (
    <div className='bg-base-200 w-full text-primary h-full flex flex-col md:bg-neutral gap-12 p-4 md:py-16 md:px-40 overflow-x-hidden'>
      <div className='h-full'>
        <div className='flex-col md:flex gap-4 items-baseline'>
          <h2 className='text-2xl font-bold'>TOP PRODUCTS</h2>
          <Link
            prefetch={false}
            href='/shop'
            className='text-xs underline underline-offset-4 text-secondary font-bold'
          >
            SHOP NOW
          </Link>
        </div>
        <p className='hidden md:block'>
          From our full kit to any piece or part, you are sure to find what you
          need.
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={60}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true
          }}
          modules={[Autoplay, Pagination]}
          className='h-96 w-[100%] !overflow-x-visible'
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.handle}
              className='md:!w-[33%] text-center relative flex items-center'
            >
              <Link
                href={`shop/${product.handle}`}
                prefetch={false}
                className='w-full h-full'
              >
                <div className='absolute bg-gradient-to-t from-slate-300 via-35% via-transparent to-transparent w-full h-full'></div>
                <p className='absolute w-full bottom-12 text-xl font-semibold text-accent'>
                  {product.title}
                </p>
                <Image
                  src={product.images[0].url}
                  alt={product.images[0].altText}
                  width={512}
                  height={400}
                  className='h-full object-cover object-bottom'
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductGallery;
