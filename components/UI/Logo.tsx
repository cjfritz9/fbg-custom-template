'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import logo from '@/public/assets/images/fbg-logo.webp';
import logoAlt from '@/public/assets/images/fbg-logo-white.webp';
import { ThemeContext } from '@/context/Theme.context';
import { ThemeInterface } from '@/@types/context';

const Logo: React.FC = () => {
  const { theme } = useContext(ThemeContext) as ThemeInterface;
  const [logoVariant, setLogoVariant] = useState(logoAlt)

  useEffect(() => {
    if (theme === 'theme5' || theme === 'dark') {
      setLogoVariant(logoAlt)
    } else {
      setLogoVariant(logo)
    }
  }, [theme])

  return (
    <Link href='/'>
      <Image priority src={logoVariant} alt='Full Blast Gear Logo' height={76} />
    </Link>
  );
};

export default Logo;
