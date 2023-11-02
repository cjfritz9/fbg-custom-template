import Hero from '@/components/layout/Hero';
import React, { PropsWithChildren } from 'react';
import companyHero from '@/public/assets/images/fbg-company-hero.webp'

const CompanyLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='bg-base-100'>
      <Hero image={{url: companyHero, altText: 'Hazy meadow with bucks in the background'}} title='FULL BLAST GEAR, LLC' slim/>
      {children}
    </div>
  );
};

export default CompanyLayout;
