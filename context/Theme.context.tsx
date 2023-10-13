import { ThemeInterface } from '@/@types/context';
import React, { PropsWithChildren, createContext, useState } from 'react';

export const ThemeContext = createContext<ThemeInterface | null>(null);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(getTheme());

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const getTheme = () => {
  let theme = '';

  if (typeof window !== 'undefined') {
    theme = localStorage.getItem('theme') ?? '';
  }

  return theme;
};

export default ThemeProvider;
