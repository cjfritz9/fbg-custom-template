import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

const Ankle: React.FC = () => {
  return (
    <div className='w-full bg-accent flex-col md:flex-row flex justify-between items-center p-4 md:px-44 md:py-16 gap-8'>
      <p className='text-xl text-white font-semibold text-center md:text-left'>SUBSCRIBE TO OUR NEWSLETTER</p>
      <div className='join'>
        <input
          className='input text-primary input-bordered join-item'
          placeholder='email@example.com'
        />
        <button aria-label='E-mail signup submit button' className='btn join-item'>
          <RiArrowRightLine />
        </button>
      </div>
    </div>
  );
};

export default Ankle;
