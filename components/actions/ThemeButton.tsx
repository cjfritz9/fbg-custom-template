'use client';
import { ThemeInterface } from '@/@types/context';
import { ThemeButtonProps } from '@/@types/props';
import { ThemeContext } from '@/context/Theme.context';
import React, { useContext, useEffect } from 'react';
import { themeChange } from 'theme-change';

const ThemeButton: React.FC<ThemeButtonProps> = ({
  attributes,
  themeChoice
}) => {
  const { setTheme } = useContext(ThemeContext) as ThemeInterface;

  useEffect(() => {
    themeChange(false);
  }, []);

  const handleClick = () => {
    setTheme(attributes['data-set-theme']);
  };
  return (
    <button {...attributes} onClick={handleClick}>
      {themeChoice}
    </button>
  );
};

export default ThemeButton;
