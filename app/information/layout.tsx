import Hero from '@/components/layout/Hero';
import React, { PropsWithChildren } from 'react';
import informationHero from '@/public/assets/images/fbg-information-hero.webp';

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
