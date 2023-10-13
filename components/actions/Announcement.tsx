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

  if (!isClient) return null;

  return (
    <div
      className={`w-full flex px-12 py-4 bg-accent z-[15] ${
        isPageAtTop ? 'justify-center' : 'justify-between'
      } align-center font-normal top-0 ${!isPageAtTop && isOpen && 'sticky'}`}
    >
      {!isPageAtTop && <div />}
      <span className='flex gap-1'>
        <p className='font-bold'>MADE IN THE USA</p>
        <p>| Free Shipping $[amt]+ | [policies] Warranty & Returns</p>
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
