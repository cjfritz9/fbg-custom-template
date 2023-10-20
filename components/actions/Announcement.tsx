'use client';
import useIsClient from '@/lib/hooks/useIsClient';
import React, { useEffect, useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';

const Announcement: React.FC = () => {
  const { isClient } = useIsClient();
  const [isPageAtTop, setIsPageAtTop] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY < 184) {
        setIsPageAtTop(true);
      } else {
        setIsPageAtTop(false);
      }
    };
    return () => {
      window.onscroll = null;
    };
  });

  if (!isClient) {
    return (
      <div
        className={`w-full px-44 py-4 bg-accent z-[16] text-white hidden lg:flex  ${
          isPageAtTop ? 'justify-center' : 'justify-between'
        } align-center font-normal top-0 ${!isPageAtTop && isOpen && 'sticky'}`}
      >
        {!isPageAtTop && <div />}
        <span className='flex gap-1'>
          <p className='font-semibold'>MADE IN THE USA</p>
          <p>| Free Shipping $50+ | 2 Year Warranty</p>
        </span>
        {!isPageAtTop && (
          <div
            className='hover:cursor-pointer text-xl'
            onClick={isClient ? () => setIsOpen(false) : undefined}
          >
            <RiCloseFill />
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`w-full px-44 py-4 bg-accent z-[16] text-white hidden lg:flex ${
        isPageAtTop ? 'justify-center' : 'justify-between'
      } align-center font-normal top-0 ${!isPageAtTop && isOpen && 'sticky'}`}
    >
      {!isPageAtTop && <div />}
      <span className='flex gap-1'>
        <p className='font-semibold'>MADE IN THE USA</p>
        <p>| Free Shipping $50+ | 2 Year Warranty</p>
      </span>
      {!isPageAtTop && (
        <div
          className='hover:cursor-pointer text-xl'
          onClick={isClient ? () => setIsOpen(false) : undefined}
        >
          <RiCloseFill />
        </div>
      )}
    </div>
  );
};

export default Announcement;
