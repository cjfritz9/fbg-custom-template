import { Metadata } from 'next';
import React, { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: { default: 'About Us', template: '%s | Full Blast USA' },
  description:
    'Learn about the passion and expertise behind Full Blast USA. Our journey, commitment, and dedication to providing the finest firearm cleaning solutions are showcased on our About page. Discover the people and values that drive us to deliver innovative, top-quality products for gun enthusiasts and professionals. Get to know us and our mission at Full Blast USA.'
};

const AboutLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col w-full h-auto bg-base-100'>{children}</div>
  );
};

export default AboutLayout;
