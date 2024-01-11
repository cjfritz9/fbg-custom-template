import React from 'react';
import Button from '../actions/Button';
import { HeroProps } from '@/@types/props';
import Image from 'next/image';

const Hero: React.FC<HeroProps> = ({
  title,
  image,
  subtitle,
  slim = false
}) => {
  if (slim) {
    return (
      <div className='flex w-full justify-center items-center bg-accent relative'>
        <h1 className='text-4xl md:text-6xl [text-shadow:_0px_2px_4px_black] text-center font-bold absolute text-white uppercase top-16 z-10'>
          {title}
        </h1>
        <Image
          src={image.url}
          alt={image.altText}
          height={320}
          width={1920}
          className='object-cover object-center hover:brightness:100'
        />
      </div>
    );
  }

  return (
    <div className='max-h-[212px] h-[212px] md:max-h-[640px] md:h-[640px] overflow-hidden bg-base-100 backdrop-filter relative'>
      <div className='absolute bg-transparent h-full w-full 2xl:mx-[-3rem] z-10 text-center'>
        <h1 className='text-lg md:text-5xl [text-shadow:_0px_2px_4px_black] text-white font-bold absolute w-full bottom-16 md:bottom-40 lg:bottom-64 xl:bottom-40 pointer-events-none'>
          {title}
        </h1>
        <p className='text-lg absolute text-white w-full bottom-32 pointer-events-none hidden xl:block'>
          {subtitle}
        </p>
        <div className='text-lg absolute w-full bottom-4 md:bottom-14 lg:bottom-36 xl:bottom-8'>
          <Button
            styles='btn-sm md:btn-lg !w-fit hover:brightness-90 hover:bg-white bg-white md:text-lg text-[#1D232A] md:w-48 justify-self-center'
            href='/shop'
            prefetch
          >
            SEE PRODUCTS
          </Button>
        </div>
      </div>
      <Image
        priority
        src={image.url}
        alt={image.altText}
        width={1920}
        height={640}
        className='object-center object-cover brightness-[60%]'
      ></Image>
    </div>
  );
};

export default Hero;
