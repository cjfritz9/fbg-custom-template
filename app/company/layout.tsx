import Hero from '@/components/layout/Hero';
import React, { PropsWithChildren } from 'react';
import companyHero from '@/public/assets/images/fbg-company-hero.webp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'Company', template: '%s - Company | Full Blast Gear' },
  description:
    'Learn about the heart and soul of Full Blast Gear on our Company page. Discover our history, values, and the dedicated team behind our unique firearm cleaning solutions. Explore the driving force that sets us apart in the industry and fuels our commitment to excellence. Get to know the Full Blast Gear story and what makes us your trusted source for firearm maintenance.'
};

const CompanyLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='bg-base-100'>
      <Hero
        image={{
          url: companyHero,
          altText: 'Hazy meadow with bucks in the background'
        }}
        title='FULL BLAST GEAR, LLC'
        slim
      />
      {children}
    </div>
  );
};

export default CompanyLayout;
