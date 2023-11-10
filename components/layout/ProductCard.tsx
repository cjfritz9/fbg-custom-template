'use client';

import { ProductCardProps } from '@/@types/props';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import Button from '../actions/Button';
import ReviewStars from '../UI/ReviewStars';
import Border from './Border';
import { CartContext } from '@/context/CartContext';
import { CartInterface } from '@/@types/shop';

const ProductCard: React.FC<ProductCardProps> = ({
  priority,
  title,
  handle,
  price,
  imageSrc,
  imageAlt,
  reviews
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const { checkout, addLineItem } = useContext(CartContext) as CartInterface;

  return (
    <Link href={handle} className='grow'>
      <div
        className='card w-[20rem] md:w-[26rem] glass text-primary shadow-none hover:shadow-lg rounded-t-md'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <figure>
          <Image
            priority={priority}
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            className={`object-cover w-full h-[254px] transition-all duration-300 ${
              isHovered ? 'scale-110' : ''
            }`}
          />
        </figure>
        <Border color='neutral' />
        <div
          className={`card-body bg-base-100 rounded-b-md items-start border-b-4 transition-colors duration-300 ${
            isHovered ? 'border-b-secondary' : ' border-b-base-100'
          }`}
        >
          <div className='h-36 w-full'>
            <div className='flex justify-between'>
              <p className='text-xl font-bold text-base-300'>${price}</p>
              <ReviewStars reviews={reviews} />
            </div>
            <div className='py-2'></div>
            <h2 className='card-title text-2xl'>{title}</h2>
          </div>
          <div className='card-actions w-full flex gap-4'>
            <Button styles='btn-primary grow btn-outline'>View</Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const LoadingCards: React.FC = () => {
  return Array.from(new Array(6)).map((_, i) => (
    <div
      key={i}
      className='card animate-pulse w-[20rem] md:w-[26rem] glass text-primary drop-shadow-2xl shadow-2xl'
    >
      <figure>
        <div className='h-[254px] w-full bg-primary opacity-50'></div>
      </figure>
      <div className='card-body'>
        <div className='h-6 w-full bg-primary rounded opacity-50'></div>
        <div className='h-24 w-full bg-primary rounded opacity-50'></div>
        <div className='card-actions justify-end'>
          <Button styles='btn-primary !w-full opacity-50 pointer-events-none'></Button>
        </div>
      </div>
    </div>
  ));
};

export default ProductCard;
