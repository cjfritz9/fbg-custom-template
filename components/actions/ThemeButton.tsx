'use client';
import { ThemeInterface } from '@/@types/context';
// import { ThemeButtonProps } from '@/@types/props';
import { ThemeContext } from '@/context/Theme.context';
import React, { useContext, useEffect, useState } from 'react';
import { themeChange } from 'theme-change';
import { TbMoon, TbSun } from 'react-icons/tb';
import useIsClient from '@/lib/hooks/useIsClient';

const ThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) as ThemeInterface;
  const { isClient } = useIsClient();
  const [attributes, setAttributes] = useState({
    'data-set-theme': theme === 'light' ? 'dark' : 'light',
    'data-act-class': theme === 'light' ? 'dark' : 'light'
  });

  useEffect(() => {
    setAttributes({
      'data-set-theme': theme === 'light' ? 'dark' : 'light',
      'data-act-class': theme === 'light' ? 'dark' : 'light'
    });
  }, [theme]);

  useEffect(() => {
    themeChange(false);
  }, [isClient]);

  if (!isClient) return null;

  return (
    <button className='text-2xl' {...attributes} onClick={toggleTheme}>
      {theme === 'light' ? <TbMoon /> : <TbSun />}
    </button>
  );
};

export default ThemeButton;
