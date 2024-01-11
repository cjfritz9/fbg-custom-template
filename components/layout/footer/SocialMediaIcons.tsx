'use client';

import { SocialMediaIconProps, SocialMediaIconsProps } from '@/@types/props';
import Link from 'next/link';
import React from 'react';
import { GrFacebook, GrInstagram, GrYoutube } from 'react-icons/gr';

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({
  slim = false
}) => {
  return (
    <div
      className={`flex justify-evenly text-primary ${
        slim ? 'w-36 lg:text-3xl' : 'w-full text-[40px] lg:text-4xl'
      }`}
    >
      <SocialMediaIcon link='https://www.facebook.com/FullBlastGear'>
        <div className='text-primary'>
          <GrFacebook />
        </div>
      </SocialMediaIcon>
      <SocialMediaIcon link='https://www.instagram.com/fullblastgear/'>
        <GrInstagram />
      </SocialMediaIcon>
      <SocialMediaIcon link='https://www.youtube.com/'>
        <GrYoutube />
      </SocialMediaIcon>
    </div>
  );
};

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  link,
  children
}) => {
  return (
    <Link prefetch={false} href={link} target='_blank'>
      {children}
    </Link>
  );
};

export default SocialMediaIcons;
