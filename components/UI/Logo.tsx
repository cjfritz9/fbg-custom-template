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
  const { theme } = useContext(ThemeContext) as ThemeInterface;
  const { isClient } = useIsClient();
  const [logoVariant, setLogoVariant] = useState(logo);

  useEffect(() => {
    if (theme === 'dark') {
      setLogoVariant(logoAlt);
    } else {
      setLogoVariant(logo);
    }
  }, [theme]);

  if (!isClient) return null;

  return (
    <Link href='/'>
      <Image
        priority
        src={logoVariant}
        alt='Full Blast Gear Logo'
        height={height}
      />
    </Link>
  );
};

export default Logo;
