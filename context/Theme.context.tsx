import { ThemeInterface } from '@/@types/context';
import React, { PropsWithChildren, createContext, useState } from 'react';

export const ThemeContext = createContext<ThemeInterface | null>(null);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(getTheme());

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const getTheme = () => {
  let theme = 'light';

  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      theme = savedTheme;
    } else {
      localStorage.setItem('theme', 'light');
    }
  }

  return theme;
};

export default ThemeProvider;
