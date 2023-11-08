import { Metadata } from 'next';
import React, { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: { default: 'About Us', template: '%s | Full Blast Gear' },
  description:
    'Learn about the passion and expertise behind Full Blast Gear. Our journey, commitment, and dedication to providing the finest firearm cleaning solutions are showcased on our About page. Discover the people and values that drive us to deliver innovative, top-quality products for gun enthusiasts and professionals. Get to know us and our mission at Full Blast Gear.'
};

const AboutLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col w-full h-auto bg-base-100'>{children}</div>
  );
};

export default AboutLayout;
