'use client';
import React, { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';

const Announcement: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='w-full flex px-12 py-4 bg-accent justify-between font-normal'>
      <p></p>
      <span className='flex gap-2'>
        <p className='font-bold'>100% MADE IN THE USA</p>
        <p>| Free Shipping $[amt]+ | [policies] Warranty & Returns</p>
      </span>
      <p className='font-normal' onClick={() => setIsOpen(false)}>
        <RiCloseFill />
      </p>
    </div>
  );
};

export default Announcement;
