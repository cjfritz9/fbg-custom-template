import React from 'react';
import { AboutSubpageProps } from '@/@types/props';
import AboutSubpages from '@/components/layout/AboutSubpage';
import Breadcrumbs from '@/components/actions/Breadcrumbs';

const AboutSubpage: React.FC<AboutSubpageProps> = ({ params: { subpage } }) => {
  return (
    <div className='flex flex-col text-primary py-8 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-28'>

      <Breadcrumbs />
      <AboutSubpages subpage={subpage} />
    </div>
  );
};

export default AboutSubpage;
