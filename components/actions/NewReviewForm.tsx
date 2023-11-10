'use client';

import { NewReviewFormFields } from '@/@types/shop';
import {
  createReviewByProductHandle,
  postCaptchaResult
} from '@/app/api/requests';
import { useReCaptcha } from 'next-recaptcha-v3';
import { IoStar, IoStarOutline } from 'react-icons/io5';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { NewReviewFormProps, NewReviewRatingProps } from '@/@types/props';

const formFields: NewReviewFormFields = {
  name: '',
  email: '',
  rating: 0,
  title: '',
  body: ''
};

const NewReviewForm: React.FC<NewReviewFormProps> = ({ handle, onClose }) => {
  const [fields, setFields] = useState<NewReviewFormFields>(formFields);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { executeRecaptcha } = useReCaptcha();

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const validationResponse = validateForm(fields);

      if (!validationResponse.isValid) {
        setError(validationResponse.message);
        return;
      }
      setIsSubmitting(true);

      const token = await executeRecaptcha('form_submit');

      const rcResult = await postCaptchaResult(token);

      setIsSubmitting(false);

      if (!rcResult.success) {
        setError(
          '❌ reCAPTCHA error: use the email link beneath the map to contact us'
        );
        return;
      }

      if (rcResult.score < 0.5) {
        setError('reCAPTCHA validation failed - try again');
        return;
      }

      const postReviewResult = await createReviewByProductHandle({
        handle,
        ...fields
      });

      if (postReviewResult?.success) {
        setSuccess('✔️ Your review was created and is being processed.');
        resetForm();
      } else {
        setError(
          'Something went wrong on our end. If this issue persists please let us know!'
        );
        return;
      }
    },
    [executeRecaptcha, fields, handle]
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleResetError = () => {
    setError('');
  };

  const handleUpdatingRating = (rating: number) => {
    //@ts-ignore
    setFields((prev) => ({ ...prev, rating }));
  };

  const resetForm = () => {
    setFields(formFields);
    setTimeout(() => {
      setSuccess('');
    }, 3000);
  };

  return (
    <form
      className='w-full'
      onSubmit={(e) => handleSubmit(e)}
      data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
      data-callback='onSubmit'
      data-action='submit'
    >
      <div className='form-control'>
        <div className='flex-col gap-8'>
          <div className='flex flex-col xl:flex-row xl:gap-8'>
            <div className='flex flex-col w-full'>
              <NewReviewRating
                rating={fields.rating}
                onUpdateRating={handleUpdatingRating}
              />
              <label className='label'>
                <span className='label-text'>Your Name</span>
              </label>
              <input
                type='text'
                name='name'
                value={fields.name}
                className='input input-bordered w-full'
                onChange={handleChange}
                onFocus={handleResetError}
              />
            </div>
          </div>
          <div className='flex flex-col xl:flex-row xl:gap-8'>
            <div className='flex flex-col w-full'>
              <label className='label'>
                <span className='label-text'>Your Email</span>
              </label>
              <input
                type='text'
                name='email'
                value={fields.email}
                className='input input-bordered w-full'
                onChange={handleChange}
                onFocus={handleResetError}
              />
            </div>
          </div>
          <div className='flex flex-col xl:flex-row xl:gap-8'>
            <div className='flex flex-col w-full'>
              <label className='label'>
                <span className='label-text'>Review Title</span>
              </label>
              <input
                type='text'
                name='title'
                value={fields.title}
                className='input input-bordered w-full'
                onChange={handleChange}
                onFocus={handleResetError}
              />
            </div>
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Review </span>
            </label>
            <textarea
              name='body'
              value={fields.body}
              className='textarea textarea-bordered h-24 lg:h-64'
              onChange={handleChange}
              onFocus={handleResetError}
            />
          </div>
          <div className='h-6'>{error || success}</div>
        </div>
        <div className='flex justify-between'>
          <button
            className='btn btn-primary w-fit mt-2 min-w-[90px]'
            type='submit'
          >
            {isSubmitting ? (
              <div className='loading loading-spinner loading-md' />
            ) : (
              'SUBMIT'
            )}
          </button>
          <button
            className='btn btn-error w-fit mt-2 min-w-[90px]'
            onClick={onClose}
          >
            DISCARD
          </button>
        </div>
      </div>
    </form>
  );
};

const NewReviewRating: React.FC<NewReviewRatingProps> = ({
  rating,
  onUpdateRating
}) => {
  const [selected, setSelected] = useState(0);

  const handleClick = (rating: number) => {
    setSelected(rating);
    onUpdateRating(rating);
  };

  useEffect(() => {
    setSelected(rating);
  }, [rating]);

  return (
    <div className='flex gap-2 text-secondary text-2xl'>
      {Array.from(new Array(5)).map((_, i) => (
        <div
          key={i}
          onClick={() => handleClick(i + 1)}
          className='cursor-pointer'
        >
          {selected >= i + 1 ? <IoStar /> : <IoStarOutline />}
        </div>
      ))}
    </div>
  );
};

const validateForm = (fields: NewReviewFormFields) => {
  for (const field in fields) {
    if (field === 'rating') continue;
    if (field === 'email') {
      if (!fields[field].includes('@') || !fields[field].includes('.')) {
        return {
          isValid: false,
          message: '❌ Please enter a valid Email Address'
        };
      }
    }
    //@ts-ignore
    if (fields[field as keyof typeof fields].length === 0) {
      return {
        isValid: false,
        message: '❌ Fill out all required fields before submitting'
      };
    }
  }

  return {
    isValid: true,
    message: ''
  };
};

export default NewReviewForm;
