import { ProductCardProps } from '@/@types/props';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../actions/Button';

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  handle,
  imageSrc,
  imageAlt
}) => {
  return (
    <div className='card w-96 glass text-primary drop-shadow-2xl shadow-2xl'>
      <figure>
        <Image src={imageSrc} alt={imageAlt} width={240} height={240} className='object-cover w-full h-[254px]' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p className='h-24 truncate'>{description}</p>
        <div className='card-actions justify-end'>
          <Link href={handle}>
            <Button styles='btn-primary !w-32'>View</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
