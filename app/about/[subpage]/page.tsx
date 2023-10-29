import React from 'react';
import { AboutSubpageProps } from '@/@types/props';
import AboutSubpages from '@/components/layout/AboutSubpage';

const AboutSubpage: React.FC<AboutSubpageProps> = ({ params: { subpage } }) => {
  return <AboutSubpages subpage={subpage} />;
};

export default AboutSubpage;
