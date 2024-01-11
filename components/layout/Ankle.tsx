import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

const Ankle: React.FC = () => {
  return (
    <div className='w-full bg-base-300 flex-col md:flex-row flex justify-between items-center p-8 md:px-44 md:py-16 gap-8'>
      <div>
        <p className='text-xl text-white font-semibold text-center md:text-left'>
          SUBSCRIBE TO OUR NEWSLETTER
        </p>
        <p className='text-sm max-w-3xl'>
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
        />
        <button
          aria-label='E-mail signup submit button'
          className='btn join-item hover:bg-base-200 hover:border-base-200'
        >
          <RiArrowRightLine />
        </button>
      </div>
    </div>
  );
};

export default Ankle;
