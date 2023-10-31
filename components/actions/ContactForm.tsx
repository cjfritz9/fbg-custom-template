'use client';

import { postCaptchaResult } from '@/app/api/requests';
import { useReCaptcha } from 'next-recaptcha-v3';
import Script from 'next/script';
import React, { useCallback, useState } from 'react';

const ContactForm: React.FC = () => {
  const { executeRecaptcha } = useReCaptcha();
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const token = await executeRecaptcha('form_submit');

      const result = await postCaptchaResult(token);

      console.log(result);
    },
    [executeRecaptcha]
  );

  const onSubmit = (token: any) => {
    console.log(token);
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
        <Script defer src='https://www.google.com/recaptcha/api.js' />
        <div className='flex-col gap-8'>
          <h3 className='text-3xl'>Shoot Us A Message</h3>
          <div className='flex flex-col xl:flex-row xl:gap-8'>
            <div className='flex flex-col w-full'>
              <label className='label'>
                <span className='label-text'>First Name</span>
              </label>
              <input type='text' className='input input-bordered w-full' />
            </div>
            <div className='flex flex-col w-full'>
              <label className='label'>
                <span className='label-text'>Last Name (optional)</span>
              </label>
              <input type='text' className='input input-bordered w-full' />
            </div>
          </div>
          <label className='label'>
            <span className='label-text'>Email Address</span>
          </label>
          <input type='text' className='input input-bordered w-full' />
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Message</span>
            </label>
            <textarea className='textarea textarea-bordered h-24 lg:h-64' />
          </div>
        </div>
        <button className='btn btn-primary w-fit mt-8' type='submit'>
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
