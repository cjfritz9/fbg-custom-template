'use client';

import ThemeProvider from '@/context/Theme.context';
import React, { PropsWithChildren } from 'react';

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
