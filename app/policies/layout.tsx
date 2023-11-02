import Hero from '@/components/layout/Hero';
import React, { PropsWithChildren } from 'react'
import policiesHero from '@/public/assets/images/fbg-policies-hero.webp'

const PoliciesLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='bg-base-100'>
      <Hero image={{url: policiesHero, altText: 'Hazy meadow with bucks in the background'}} title='POLICIES' slim/>
      {children}
    </div>
  );
}

export default PoliciesLayout;