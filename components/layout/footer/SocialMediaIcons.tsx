'use client';

import { SocialMediaIcon } from '@/@types/props';
import Link from 'next/link';
import React from 'react';
import { GrFacebook, GrInstagram } from 'react-icons/gr';

const SocialMediaIcons: React.FC = () => {
  return (
    <div className='flex w-full justify-evenly text-primary text-[40px] lg:text-4xl'>
      <SocialMediaIcon link='https://www.facebook.com/FullBlastGear'>
        <div className='text-blue-500'>
          <GrFacebook />
        </div>
      </SocialMediaIcon>
      <SocialMediaIcon link='https://www.facebook.com/FullBlastGear'>
        <GrInstagram />
      </SocialMediaIcon>
    </div>
  );
};

const SocialMediaIcon: React.FC<SocialMediaIcon> = ({ link, children }) => {
  return (
    <Link prefetch={false} href={link}>
      <div>{children}</div>
    </Link>
  );
};

export default SocialMediaIcons;
