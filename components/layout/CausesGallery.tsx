'use client';

import Image from 'next/image';
import React from 'react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import autismSpeaksImg from '@/public/assets/images/fbg-causes-as.jpg';
import habitatForHumanityImg from '@/public/assets/images/fbg-causes-hfh.webp';
import pheasantsForeverImg from '@/public/assets/images/fbg-causes-pf.jpg';
import woundedWarriorProjectImg from '@/public/assets/images/fbg-causes-wwp.webp';
import 'swiper/css';
import 'swiper/css/effect-fade';

const CausesGallery: React.FC = () => {
  return (
    <div className='xl:min-w-[424px] w-full h-auto xl:h-[476px] flex justify-center overflow-hidden'>
      <Swiper
        effect='fade'
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }}
        modules={[
          EffectFade,
          Autoplay,
        ]}
        className='w-full h-auto xl:w-[624px]'
      >
        <SwiperSlide>
          <Image
            alt='Autism Speaks Logo'
            src={autismSpeaksImg}
            width={424}
            height={424}
            className='w-full xl:w-[424px] h-full xl:h-[424px] object-cover object-center'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt='Habitat For Humanity Logo'
            src={habitatForHumanityImg}
            width={424}
            height={424}
            className='w-full xl:w-[424px] h-full xl:h-[424px] object-cover object-center'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt='Pheasants Forever Logo'
            src={pheasantsForeverImg}
            width={424}
            height={424}
            className='w-full xl:w-[424px] h-full xl:h-[424px] object-cover object-center'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt='Wounded Warrior Project Logo'
            src={woundedWarriorProjectImg}
            width={476}
            height={424}
            className='w-full xl:w-[476] h-auto object-cover object-center'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CausesGallery;
