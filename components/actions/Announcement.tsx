import React from 'react';

const Announcement: React.FC = () => {
  return (
    <div
      className='w-full px-44 py-4 bg-accent z-[16] text-white hidden lg:flex justify-center
       align-center font-normal top-0'
    >
      <span className='flex gap-1'>
        <p className='font-semibold'>MADE IN THE USA</p>
        <p>| Free Shipping $50+ | 2 Year Warranty</p>
      </span>
    </div>
  );
};

export default Announcement;
