'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  NewReviewFormProps,
  ProductReviewsProps,
  ReviewProps
} from '@/@types/props';
import Border from './Border';
import ReviewStars from '../UI/ReviewStars';
import { getReviewsByProductHandle } from '@/app/api/requests';
import useIsClient from '@/lib/hooks/useIsClient';
import Button from '../actions/Button';
import { Dialog } from '@headlessui/react';
import '@/app/jdgm-base.css'

const ProductReviews: React.FC<ProductReviewsProps> = ({ handle, reviews }) => {
  const [reviewsList, setReviewsList] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    perPage: 3
  });
  const [totalPages, setTotalPages] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const isClient = useIsClient();

  const handleChange = (value: string) => {
    if (+value > 10 || +value < 1) return;
    setPagination((prev) => ({
      ...prev,
      perPage: +value
    }));
  };

  const handleToggleReviewForm = () => {
    setShowForm((prev) => !prev);
  };

  useEffect(() => {
    if (reviews && handle) {
      (async () => {
        const response = await getReviewsByProductHandle(
          handle,
          pagination.currentPage,
          pagination.perPage
        );
        if (response) {
          setReviewsList(response);
        }
      })();
      setTotalPages(Math.ceil(reviews.reviewCount / pagination.perPage));
    }
  }, [handle, reviews, pagination]);

  if (!isClient) return null;

  return (
    <section className='flex flex-col text-primary py-12'>
      <Border />
      {
        <NewReviewForm
          handle={handle}
          showForm={showForm}
          onToggleReviewForm={handleToggleReviewForm}
        />
      }
      <div className='flex flex-col py-12 gap-2'>
        <p className='font-semibold text-4xl'>Product Reviews</p>
        <div className='flex gap-4 items-baseline justify-left'>
          <p className='font-bold text-2xl'>{reviews.rating.toFixed(1)}</p>
          <ReviewStars reviews={reviews} styles='!text-2xl' />
        </div>
      </div>
      <Border />
      <div className='flex w-full justify-between py-12'>
        <p className='font-semibold opacity-75'>{`${reviews.reviewCount} Reviews`}</p>
        <div onClick={handleToggleReviewForm}>
          <Button styles='btn-primary'>ADD REVIEW</Button>
        </div>
      </div>
      {reviewsList.length > 0 ? (
        reviewsList.map((review: any) => (
          <Review key={review.id} review={review} />
        ))
      ) : (
        <p className='mb-6'>Be the first to leave a review!</p>
      )}
      <Border />
      <div className='flex flex-col xl:flex-row justify-between py-4 gap-4 items-center'>
        <div></div>
        <div className='flex items-center gap-4'>
          {Array.from(new Array(totalPages < 10 ? totalPages : 10)).map(
            (_, i) => (
              <div
                key={i}
                className={
                  i + 1 === pagination.currentPage
                    ? 'font-bold text-blue-600 pointer-events-none'
                    : 'cursor-pointer hover:font-bold'
                }
                onClick={() =>
                  setPagination((prev) => ({
                    ...prev,
                    currentPage: i + 1
                  }))
                }
              >
                {i + 1}
              </div>
            )
          )}
        </div>
        <div className='flex items-center gap-4'>
          <p>Reviews Per Page:</p>
          <input
            className='bg-base-200 px-4 py-1 w-12'
            onChange={(e) => handleChange(e.target.value)}
            value={pagination.perPage}
          ></input>
        </div>
      </div>
      <Border />
    </section>
  );
};

export default ProductReviews;

export const Review: React.FC<ReviewProps> = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedBody =
    review.body.length > 384 ? review.body.slice(0, 384) + '...' : review.body;
  const reviewBodyRef = useRef<HTMLParagraphElement>(null);

  return (
    <div key={review.id} className='pb-12'>
      <div className='flex gap-4'>
        <div className='avatar'>
          <div className='w-16 rounded-full bg-blue-300 relative'>
            <p className='absolute left-6 top-[18px] text-base-100 font-bold text-xl'>
              {review.reviewer.name[0].toUpperCase()}
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <p className='font-semibold'>{review.reviewer.name}</p>
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
        <p ref={reviewBodyRef} className='mt-4'>
          {isExpanded ? review.body : truncatedBody}
        </p>
      </div>
      <div>
        {!isExpanded ? (
          <p
            className='text-blue-700 font-semibold mt-4 cursor-pointer'
            onClick={() => setIsExpanded(true)}
          >
            Read More
          </p>
        ) : (
          <p
            className='text-blue-700 font-semibold mt-4 cursor-pointer'
            onClick={() => setIsExpanded(false)}
          >
            Show Less
          </p>
        )}
      </div>
    </div>
  );
};

const NewReviewForm: React.FC<NewReviewFormProps> = ({
  showForm,
  onToggleReviewForm
}) => {
  if (!showForm) return null;

  return (
    <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
      <Dialog
        open={showForm}
        onClose={onToggleReviewForm}
        className='relative z-50 text-primary'
      >
        <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
        <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
          <Dialog.Panel className='mx-auto p-12 max-w-sm rounded bg-white'>
            <Dialog.Title className='text-xl'>Leave Your Review</Dialog.Title>
            <Dialog.Title></Dialog.Title>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};
