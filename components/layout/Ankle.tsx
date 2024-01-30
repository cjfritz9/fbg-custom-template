'use client';

import { CustomerResponse } from '@/@types/api';
import { validateEmail } from '@/shopify/utils';
import React, { useState } from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

const Ankle: React.FC = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState({ display: false, message: '' });
  const [error, setError] = useState({ display: false, message: '' });

  const handleSubscribe = async () => {
    resetToasts('global-reset');
    const { isValid } = validateEmail(email);

    if (isValid) {
      const response = await fetch('/api/customers', {
        method: 'POST',
        body: JSON.stringify({
          email
        })
      });
      const result = await response.json();

      if (result && result.success) {
        setSuccess({
          display: true,
          message: `Success! ${result.customer?.email} added to mailing list!`
        });
        resetToasts('success');
        setEmail('')
      } else {
        setError({ display: true, message: "You're already subscribed!" });
        resetToasts('error');
      }
    } else {
      setError({ display: true, message: 'Invalid email address' });
      resetToasts('error');
    }
  };

  const resetToasts = (type: 'success' | 'error' | 'global-reset') => {
    if (type === 'success') {
      setTimeout(() => {
        setSuccess({ display: false, message: '' });
      }, 5000);
    }

    if (type === 'error') {
      setTimeout(() => {
        setError({ display: false, message: '' });
      }, 5000);
    }

    if (type === 'global-reset') {
      setSuccess({ display: false, message: '' });
      setError({ display: false, message: '' });
    }
  };

  return (
    <div className='w-full bg-base-300 flex-col md:flex-row flex justify-between items-center p-8 md:px-44 md:py-16 gap-8'>
      <div>
        <p className='text-xl text-white font-semibold text-center md:text-left'>
          SUBSCRIBE TO OUR NEWSLETTER
        </p>
        <p className='text-sm text-white max-w-3xl'>
          Sign up for FREE and receive current news from our Made in the USA Gun
          Community, including special features, interviews, and insider info.
          You can unsubscribe at any time. We won’t share your e-mail, ever.
          You’re safe with us.
        </p>
      </div>
      <div className='join'>
        <input
          className='input text-primary input-bordered join-item focus:outline-none'
          placeholder='email@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          aria-label='E-mail signup submit button'
          className='btn join-item hover:bg-base-200 hover:border-base-200'
          onClick={handleSubscribe}
        >
          <RiArrowRightLine />
        </button>
      </div>
      {success.display && (
        <div className='toast toast-top toast-end'>
          <div className='alert alert-success'>
            <span>{success.message}</span>
          </div>
        </div>
      )}
      {error.display && (
        <div className='toast toast-top toast-end'>
          <div className='alert alert-error'>
            <span>{error.message}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ankle;
