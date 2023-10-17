import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/public/assets/images/fbg-logo-white.webp';
import { LogoProps } from '@/@types/props';

const Logo: React.FC<LogoProps> = ({ height = 76 }) => {
  return (
    <Link href='/'>
      <Image priority src={logo} alt='Full Blast Gear Logo' height={height} />
    </Link>
  );
};

export default Logo;
