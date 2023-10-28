'use client';

import CartProvider from '@/context/CartContext';
import React, { PropsWithChildren } from 'react';

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Providers;
