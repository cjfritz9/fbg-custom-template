'use client';

import React, { useEffect, useState } from 'react';
import Button from '../actions/Button';
import Link from 'next/link';
import useIsClient from '@/lib/hooks/useIsClient';

const CookieBar: React.FC = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(false);
  const { isClient } = useIsClient()

  const acceptCookies = () => {
    localStorage.setItem('accepted_cookies', 'true');
    setAcceptedCookies(true);
  };

  useEffect(() => {
    const storedCookieChoice = localStorage.getItem('accepted_cookies');
    if (storedCookieChoice === 'true') {
      setAcceptedCookies(true);
    }
  }, []);

  if (!isClient) return null;

  if (acceptedCookies) return null;

  return (
    <div className='fixed bottom-0 w-full text-base-100 text-lg font-semibold bg-base-300 flex flex-col lg:flex-row justify-center items-center px-12 py-4 gap-4 z-[100]'>
      <p className='text-center'>
        Our site uses cookies to improve your experience and analyze site
        traffic.
      </p>
      <div className='flex gap-4'>
        <Link href='/policies/cookies'>
          <Button styles='btn-secondary'>Read More</Button>
        </Link>
        <div onClick={acceptCookies}>
          <Button styles='btn-base-100 hover:bg-base-100'>Accept</Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBar;
