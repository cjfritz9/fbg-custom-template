'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import logo from '@/public/assets/images/fbg-logo.webp';
import logoAlt from '@/public/assets/images/fbg-logo-white.webp';
import { ThemeContext } from '@/context/Theme.context';
import { ThemeInterface } from '@/@types/context';
import { LogoProps } from '@/@types/props';
import useIsClient from '@/lib/hooks/useIsClient';

const Logo: React.FC<LogoProps> = ({ height = 76 }) => {
  const { logo } = useContext(ThemeContext) as ThemeInterface;
  const { isClient } = useIsClient();

  if (!isClient) {
    return (
      <div className='w-48 flex justify-center'>
        <span className='loading loading-dots loading-lg text-secondary' />
      </div>
    );
  }

  return (
    <Link href='/'>
      <Image priority src={logo} alt='Full Blast Gear Logo' height={height} />
    </Link>
  );
};

export default Logo;
