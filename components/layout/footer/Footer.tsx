import React from 'react';
import Logo from '../../UI/Logo';
import FooterLinks from './FooterLinks';

const Footer: React.FC = () => {
  return (
    <div className='w-full flex gap-40 justify-between bg-[#34393f] px-44 py-12'>
      <Logo height={128} />
      <FooterLinks />
    </div>
  );
};

export default Footer;
