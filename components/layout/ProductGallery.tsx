'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

/** Uses Swiper.js under the hood, making use of
 *  the Autoplay and Pagination modules, fully
 *  configurable.
 *
 *  https://swiperjs.com/react
 */
const ProductGallery: React.FC = () => {
  return (
    <div className='w-[100%] h-full flex flex-col bg-[#14191d] gap-12 px-44 py-12 overflow-visible'>
      <div>
        <div className='flex gap-4 items-baseline'>
          <h2 className='text-2xl font-bold'>TOP PRODUCTS</h2>
          <Link href='/shop' className='text-xs underline underline-offset-4 text-accent'>SHOP NOW</Link>
        </div>
        <p>
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
          <SwiperSlide className='!w-[33%] text-center text-xl text-black bg-white'>
            Product 1
          </SwiperSlide>
          <SwiperSlide className='!w-[33%] text-center text-xl text-black bg-white'>
            Product 2
          </SwiperSlide>
          <SwiperSlide className='!w-[33%] text-center text-xl text-black bg-white'>
            Product 3
          </SwiperSlide>
          <SwiperSlide className='!w-[33%] text-center text-xl text-black bg-white'>
            Product 4
          </SwiperSlide>
          <SwiperSlide className='!w-[33%] text-center text-xl text-black bg-white'>
            Product 5
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductGallery;
