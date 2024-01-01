import Hero from '@/components/layout/Hero';
import React, { PropsWithChildren } from 'react';
import exampleHero from '@/public/assets/images/patriot-gear-hero.webp';

const PartnerExampleLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Hero
        title='Patriot Gear Co.'
        image={{ url: exampleHero, altText: 'Patriot Gear Co. Brand Image' }}
        slim
      />
      <div className='flex flex-col text-primary gap-8 py-8 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-28 bg-base-100'>

        {children}
      </div>
    </div>
  );
};

export default PartnerExampleLayout;
