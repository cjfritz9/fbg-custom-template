import React from 'react';
import Logo from '../UI/Logo';
import FooterLinks from '../actions/FooterLinks';
import { footerLinks } from '@/lib/static/links';

const Footer: React.FC = () => {
  return (
    <div className='w-full flex flex-col gap-4 items-center bg-base-100 px-44 py-12'>
      <Logo />
      <FooterLinks />
    </div>
  );
};

export default Footer;
