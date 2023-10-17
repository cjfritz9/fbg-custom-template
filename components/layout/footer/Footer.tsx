import React from 'react';
import Logo from '../../UI/Logo';
import FooterLinks from './FooterLinks';

const Footer: React.FC = () => {
  return (
    <div className='w-full flex gap-40 justify-between bg-[#34393f] p-4 md:px-44 md:py-12'>
      <div className='hidden xl:block w-full'>
        <Logo height={128} />
      </div>
      <FooterLinks />
    </div>
  );
};

export default Footer;
