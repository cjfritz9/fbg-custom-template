'use client';

import CartProvider from '@/context/CartContext';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import React, { PropsWithChildren } from 'react';

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}>
      <CartProvider>{children}</CartProvider>
    </ReCaptchaProvider>
  );
};

export default Providers;
