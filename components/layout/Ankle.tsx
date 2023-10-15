import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

const Ankle: React.FC = () => {
  return (
    <div className='w-full bg-accent flex justify-between items-center px-44 py-16'>
      <p className='text-xl font-semibold'>SUBSCRIBE TO OUR NEWSLETTER</p>
      <div className='join'>
        <input
          className='input input-bordered join-item'
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
