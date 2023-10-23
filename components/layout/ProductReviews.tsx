import React from 'react';
import { ProductReviewsProps } from '@/@types/props';
import Border from './Border';
import { IoStar } from 'react-icons/io5';
import Image from 'next/image';

const ProductReviews: React.FC<ProductReviewsProps> = () => {
  return (
    <section className='flex flex-col text-primary py-12'>
      <Border />
      <div className='flex gap-4 items-baseline justify-center py-12'>
        <p className='font-bold text-2xl'>5.0</p>
        <div className='flex gap-2 text-secondary text-2xl font-bold items-center'>
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </div>
        <p>45 Reviews </p>
      </div>
      <Border />
      <div className='py-12'>
        <p className='font-semibold opacity-75'>45 Reviews</p>
      </div>
      <div className='pb-12'>
        <div className='flex gap-4'>
          <div className='avatar'>
            <div className='w-16 rounded-full bg-secondary relative'>
              <p className='absolute left-6 top-4 text-base-100 font-bold text-xl'>
                C
              </p>
            </div>
          </div>
          <div className='flex flex-col justify-between py-2'>
            <p>CJ F.</p>
            <div className='flex text-secondary text-lg font-bold items-center'>
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <p className='font-semibold text-lg'>{`A Hunter's Dream!`}</p>
          <p className='mt-4'>{`I recently got my hands on the Full-Bore Blast Complete Shotgun Cleaning Kit, and it's nothing short of incredible. As an avid hunter and shooting enthusiast, I've used many cleaning kits over the years, but this one takes the cake. Here's why I'm absolutely thrilled with it:`}</p>
        </div>
        <div>
          <p className='text-blue-700 font-semibold mt-4 cursor-pointer'>Read More</p>
        </div>
      </div>
      <Border />
    </section>
  );
};

export default ProductReviews;
