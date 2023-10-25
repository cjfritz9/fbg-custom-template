'use client';

import React, { useEffect, useState } from 'react';
import { ProductReviewsProps } from '@/@types/props';
import Border from './Border';
import ReviewStars from '../UI/ReviewStars';
import { getReviewsByProductHandle } from '@/app/api/requests';

const ProductReviews: React.FC<ProductReviewsProps> = ({ handle, reviews }) => {
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getReviewsByProductHandle(handle);
      setReviewsList(response);
    })();
  }, [handle]);

  console.log(reviewsList);
  return (
    <section className='flex flex-col text-primary py-12'>
      <Border />
      <div className='flex flex-col py-12 gap-2'>
        <p className='font-semibold text-4xl'>Product Reviews</p>
        <div className='flex gap-4 items-baseline justify-left'>
          <p className='font-bold text-2xl'>{reviews.rating.toFixed(1)}</p>
          <ReviewStars reviews={reviews} styles='!text-2xl' />
        </div>
      </div>
      <Border />
      <div className='py-12'>
        <p className='font-semibold opacity-75'>{`${reviews.reviewCount} Reviews`}</p>
      </div>
      {reviewsList.length > 0 ? (
        reviewsList.map((review: any) => (
          <div key={review.id} className='pb-12'>
            <div className='flex gap-4'>
              <div className='avatar'>
                <div className='w-16 rounded-full bg-secondary relative'>
                  <p className='absolute left-6 top-4 text-base-100 font-bold text-xl'>
                    {review.reviewer.name[0].toUpperCase()}
                  </p>
                </div>
              </div>
              <div className='flex flex-col justify-center'>
                <p>{review.reviewer.name}</p>
                <ReviewStars
                  reviews={{ rating: review.rating, reviewCount: 1 }}
                  styles='!text-2xl'
                />
              </div>
            </div>
            <div className='mt-4'>
              <p className='font-semibold text-lg'>{review.title}</p>
              <p className='text-sm'>
                {new Date(review.created_at).toLocaleDateString()}
              </p>
              <p className='mt-4'>{`I recently got my hands on the Full-Bore Blast Complete Shotgun Cleaning Kit, and it's nothing short of incredible. As an avid hunter and shooting enthusiast, I've used many cleaning kits over the years, but this one takes the cake. Here's why I'm absolutely thrilled with it:`}</p>
            </div>
            <div>
              <p className='text-blue-700 font-semibold mt-4 cursor-pointer'>
                Read More
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className='mb-6'>Be the first to leave a review!</p>
      )}
      <Border />
    </section>
  );
};

export default ProductReviews;
