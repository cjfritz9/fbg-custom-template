import Hero from '@/components/layout/Hero';
import React, { PropsWithChildren } from 'react';
import policiesHero from '@/public/assets/images/fbg-policies-hero.webp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'Policies', template: '%s - Policies | Full Blast USA' },
  description:
    'Understand our policies and commitments on the Policies page at Full Blast USA. We value transparency, integrity, and your satisfaction. Learn about our privacy, return, and customer service policies to ensure a seamless experience with our unique firearm cleaning solutions.'
};

const PoliciesLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='bg-base-100'>
      <Hero
        image={{
          url: policiesHero,
          altText: 'Hazy meadow with bucks in the background'
        }}
        title='POLICIES'
        slim
      />
      {children}
    </div>
  );
};

export default PoliciesLayout;
