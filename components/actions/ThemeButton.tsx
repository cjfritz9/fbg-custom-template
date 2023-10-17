'use client';

import useIsClient from '@/lib/hooks/useIsClient';
import React, { useEffect, useState } from 'react';
import { TbMoon, TbSun } from 'react-icons/tb';
import { themeChange } from 'theme-change';

const ThemeButton: React.FC = () => {
  const { isClient } = useIsClient();
  const [theme, setTheme] = useState('light');

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    themeChange(false);
    setTheme(getTheme());
  }, []);

  return (
    <button
      aria-label='Toggle Theme'
      className='md:text-2xl text-white'
      data-set-theme={theme === 'light' ? 'dark' : 'light'}
      data-act-class={theme === 'light' ? 'light' : 'dark'}
      onClick={handleClick}
    >
      {theme === 'light' ? <TbMoon /> : <TbSun />}
    </button>
  );
};

const getTheme = () => {
  let theme = 'light';
  if (typeof window !== undefined) {
    theme = window.localStorage.getItem('theme') ?? 'light';
  }
  return theme;
};

export default ThemeButton;
