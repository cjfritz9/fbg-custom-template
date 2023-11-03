'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  PrimaryImageProps,
  ProductImagesProps,
  ThumbnailImagesProps
} from '@/@types/props';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/app/swiper-custom.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { RiCloseFill } from 'react-icons/ri';
import useLightbox from '@/lib/hooks/useLightbox';
import { SlideImage } from 'yet-another-react-lightbox';

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setImageIndex(index);
  };

  return (
    <div className='max-w-[90dvw] flex flex-col-reverse xl:flex-row justify-between h-fit lg:top-16 lg:sticky gap-8'>
      <ThumbnailImages images={images} onUpdateImage={handleThumbnailClick} />
      <PrimaryImage currentImage={images[imageIndex]} images={images} />
    </div>
  );
};

const ThumbnailImages: React.FC<ThumbnailImagesProps> = ({
  images,
  onUpdateImage
}) => {
  return (
    <div className='flex xl:flex-col xl:max-h-[556px]'>
      <Swiper
        direction='vertical'
        slidesPerView={4}
        spaceBetween={40}
        navigation
        modules={[Navigation]}
        className='!min-h-[556px] !max-w-32 !hidden xl:!block !py-10'
      >
        {images.map((image, i) => (
          <SwiperSlide key={image.url} className='h-auto w-auto cursor-pointer'>
            <Image
              key={image.url}
              src={image.url}
              alt={image.altText}
              height={192}
              width={192}
              className='w-32 h-32 object-cover'
              onClick={() => onUpdateImage(i)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={4}
        spaceBetween={16}
        navigation
        modules={[Navigation]}
        className='max-w-[640px] sm:max-w-[556px] flex justify-evenly xl:!hidden'
      >
        {images.map((image, i) => (
          <SwiperSlide key={image.url} className='min-w-20 cursor-pointer'>
            <Image
              key={image.url}
              src={image.url}
              alt={image.altText}
              height={192}
              width={192}
              className='min-w-20 w-auto min-h-20 h-20 object-cover'
              onClick={() => onUpdateImage(i)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const PrimaryImage: React.FC<PrimaryImageProps> = ({ currentImage, images }) => {
  const { openLightbox, renderLightbox } = useLightbox();

  const slides: SlideImage[] = images.map((image) => ({ src: image.url }));

  return (
    <>
      {renderLightbox({ slides })}
      <div className='flex justify-center max-h-[656px] lg:w-[556px] xl:w-[720px] 2xl:w-[848px]'>
        <Image
          priority
          src={currentImage.url}
          alt={currentImage.altText}
          height={960}
          width={960}
          className='object-cover object-center w-full h-auto max-h-[556px] cursor-pointer'
          onClick={openLightbox}
        />
      </div>
    </>
  );
};

export default ProductImages;
