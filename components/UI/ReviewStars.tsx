'use client';

import React from 'react';
import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5';
import { ReviewStarsProps } from '@/@types/props';

const ReviewStars: React.FC<ReviewStarsProps> = ({
  reviews,
  styles = '',
  showCount = false
}) => {
  const stars = generateStars(reviews.rating);

  return reviews.reviewCount === 0 ? (
    <span> No Reviews </span>
  ) : (
    <div className={`flex text-secondary text-lg font-bold items-center ${styles}`}>
      {Array.from(new Array(stars.full)).map((_, i) => (
        <IoStar key={i} />
      ))}
      {Array.from(new Array(stars.half)).map((_, i) => (
        <IoStarHalf key={i} />
      ))}
      {Array.from(new Array(stars.empty)).map((_, i) => (
        <IoStarOutline key={i} />
      ))}
      {showCount && <p className='px-2 font-semibold text-primary'>({reviews.reviewCount})</p>}
    </div>
  );
};

const generateStars = (starCount: number) => {
  const halfStars = starCount % 1 !== 0 ? 1 : 0;

  const stars = {
    full: Math.floor(starCount),
    half: halfStars,
    empty: Math.ceil(5 - halfStars - starCount)
  };

  return stars;
};

export default ReviewStars;
