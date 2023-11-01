import React from 'react';
import Logo from '../../UI/Logo';
import FooterLinks from './FooterLinks';
import SocialMediaIcons from './SocialMediaIcons';

const Footer: React.FC = () => {
  return (
    <div>
      <div className='w-full flex flex-col-reverse xl:flex-row gap-4 xl:gap-40 justify-between bg-base-100 p-4 md:px-44 md:py-12'>
        <div className='flex flex-col justify-between'>
          <div className='hidden xl:block w-full'>
            <Logo height={128} />
          </div>
          <SocialMediaIcons />
        </div>
        <FooterLinks />
      </div>
      <div className='bg-base-200 md:px-44 py-2'>
        <p className='text-primary text-center'>
          © 2022 FULL BLAST ENTERPRISES, LLC ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
};

export default Footer;
