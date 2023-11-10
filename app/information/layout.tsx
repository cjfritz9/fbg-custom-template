import Hero from '@/components/layout/Hero';
import React, { PropsWithChildren } from 'react';
import informationHero from '@/public/assets/images/fbg-information-hero.webp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'Information', template: '%s - Information | Full Blast Gear' },
  description:
    "Access valuable information and resources on the Information page at Full Blast Gear. Discover educational content, user guides, and more to help you make informed decisions about your firearm cleaning needs. At Full Blast Gear, we're dedicated to providing you with the knowledge you need for effective firearm maintenance."
};

const InformationLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='bg-base-100'>
      <Hero
        image={{
          url: informationHero,
          altText: 'Hazy meadow with bucks in the background'
        }}
        title='INFORMATION'
        slim
      />
      {children}
    </div>
  );
};

export default InformationLayout;
