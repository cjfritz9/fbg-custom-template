import { ProductCardProps } from '@/@types/props';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../actions/Button';

const ProductCard: React.FC<ProductCardProps> = ({
  priority,
  title,
  handle,
  imageSrc,
  imageAlt
}) => {
  return (
    <div className='card w-96 glass text-primary drop-shadow-2xl shadow-2xl'>
      <figure>
        <Image
          priority
          src={imageSrc}
          alt={imageAlt}
          width={240}
          height={240}
          className='object-cover w-full h-[254px]'
        />
      </figure>
      <div className='card-body items-start'>
        <div className='h-36'>
          <h2 className='card-title text-2xl'>{title}</h2>
        </div>
        <div className='card-actions w-full'>
          <Link href={handle} className='w-full'>
            <Button styles='btn-primary min-w-full'>View</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const LoadingCards: React.FC = () => {
  return Array.from(new Array(6)).map((_, i) => (
    <div
      key={i}
      className='card animate-pulse w-96 glass text-primary drop-shadow-2xl shadow-2xl'
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
