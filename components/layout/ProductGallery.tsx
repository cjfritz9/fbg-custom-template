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
import { ProductGalleryProps } from '@/@types/props';
import Border from './Border';

/** Uses Swiper.js under the hood, making use of
 *  the Autoplay and Pagination modules, fully
 *  configurable.
 *
 *  https://swiperjs.com/react
 */
const ProductGallery: React.FC<ProductGalleryProps> = ({
  title,
  subtitle,
  productsTag,
  length,
  link
}) => {
  const [products, setProducts] = useState<FormattedProduct[]>([]);
  const [hoverData, setHoverData] = useState({ isHovered: false, index: 0 });

  useEffect(() => {
    (async () => {
      const response = await getProductsByTag(productsTag);
      if (!response) return;
      const { products: taggedProducts } = response;
      setProducts(taggedProducts.slice(0, length));
    })();
  }, [productsTag, length]);

  return (
    <div className='bg-base-200 w-full text-primary h-full flex flex-col md:bg-neutral gap-12 p-4 md:py-16 md:px-40 overflow-x-hidden'>
      <div className='h-full'>
        <div className='flex-col md:flex gap-4 items-baseline'>
          <h2 className='text-2xl font-bold'>{title}</h2>
          {link && (
            <Link
              prefetch={false}
              href={link.slug}
              className='text-xs underline uppercase underline-offset-4 text-secondary font-bold'
            >
              {link.name}
            </Link>
          )}
        </div>
        <p className='hidden md:block'>{subtitle}</p>
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
          className='h-fit w-[100%] !overflow-x-visible !pb-12'
        >
          {products.map((product, i) => (
            <SwiperSlide
              key={product.handle}
              className='md:!w-[25%] text-center relative flex items-center bg-base-100'
              onMouseEnter={() => setHoverData({ isHovered: true, index: i })}
              onMouseLeave={() => setHoverData({ isHovered: false, index: 0 })}
            >
              <div>
                <Link
                  href={`shop/${product.handle}`}
                  prefetch={false}
                  className='w-full h-full mix-blend-multiply'
                >
                  <Image
                    src={product.images[0].url}
                    alt={product.images[0].altText}
                    width={512}
                    height={400}
                    className={`h-full object-cover object-center border-b ${
                      hoverData.isHovered && hoverData.index === i
                        ? 'border-b-secondary'
                        : ' border-b-transparent'
                    }`}
                  />
                  <Border />
                  <p className='h-24 flex items-center justify-center w-full bg-transparent px-4 text-xl font-semibold text-accent'>
                    {product.title}
                  </p>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductGallery;
