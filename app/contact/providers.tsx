'use client';

import { ReCaptchaProvider } from 'next-recaptcha-v3';
import React, { PropsWithChildren } from 'react';

const ContactProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}>
      {children}
    </ReCaptchaProvider>
  );
};

export default ContactProviders;
