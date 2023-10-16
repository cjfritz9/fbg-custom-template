import { ThemeInterface } from '@/@types/context';
import React, { PropsWithChildren, createContext, useState } from 'react';
import logoLight from '@/public/assets/images/fbg-logo.webp';
import logoDark from '@/public/assets/images/fbg-logo-white.webp';
import { StaticImageData } from 'next/image';

export const ThemeContext = createContext<ThemeInterface | null>(null);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(getTheme('color') as string);
  const [logo, setLogo] = useState(getTheme('logo') as StaticImageData);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setLogo(logoDark)
    } else {
      setTheme('light');
      setLogo(logoLight)
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        logo,
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

const getTheme = (operation: 'color' | 'logo') => {
  let themeColor = 'light';
  let logo = logoLight;

  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      themeColor = savedTheme;
    } else {
      localStorage.setItem('theme', 'light');
    }
  }

  if (themeColor === 'dark') {
    logo = logoDark
  }

  if (operation === 'color') {
    return themeColor;
  } else {
    return logo
  }
};

