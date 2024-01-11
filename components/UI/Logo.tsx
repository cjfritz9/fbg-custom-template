import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/public/assets/images/fbg-logo.webp';
import { LogoProps } from '@/@types/props';

const Logo: React.FC<LogoProps> = ({ height = 76 }) => {
  return (
    <Link href='/'>
      <Image
        priority
        src={logo}
        height={height}
        alt='Full Blast USA Logo'
        className={`w-auto h-auto !max-w-full max-lg:h-12`}
      />
    </Link>
  );
};

export default Logo;
