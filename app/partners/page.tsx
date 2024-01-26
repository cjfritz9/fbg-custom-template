'use client';

import Hero from '@/components/layout/Hero';
import React, { useEffect, useState } from 'react';
import hero from '@/public/assets/images/patriot-gear-hero.webp';
import { getPartners } from '../api/requests';
import PartnerCard, {
  LoadingPartnerCard
} from '@/components/layout/PartnerCard';
import { PartnerCardProps } from '@/@types/props';
import Border from '@/components/layout/Border';

const PartnersPage: React.FC = () => {
  const [partners, setPartners] = useState<PartnerCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const partnersResponse = await getPartners();
      if (partnersResponse && partnersResponse.length > 0) {
        setPartners(partnersResponse);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <Hero
        slim
        title='MEET OUR PARTNERS'
        image={{ url: hero.src, altText: 'Our Partners Banner' }}
      />
      <div className='flex flex-col text-primary gap-8 py-8 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-28 bg-base-100'>
        <p className='text-center max-w-4xl w-full self-center text-lg'>
          At Full Blast USA, we take pride in collaborating with
          industry-leading partners who share our commitment to quality and
          excellence. Our partnerships extend beyond business relationships;
          they represent a shared passion for the great outdoors and a
          dedication to providing top-notch gun cleaning solutions.
        </p>
        <Border />
        <div>
          {isLoading && <LoadingPartnerCard />}
          {partners.map((partner, i) => (
            <PartnerCard
              key={i}
              name={partner.name}
              handle={partner.handle}
              logo={partner.logo}
              excerpt={partner.excerpt}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
