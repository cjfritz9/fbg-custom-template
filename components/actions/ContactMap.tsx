'use client';

import { ContactLinkProps } from '@/@types/props';
import React, { PropsWithChildren, useState } from 'react';
import { PiMapPinLineBold } from 'react-icons/pi';
import { RiMailLine, RiPhoneLine } from 'react-icons/ri';

const ContactMap: React.FC = () => {
  return (
    <div className='w-full'>
      <div className='flex w-full justify-evenly mb-8 text-5xl'>
        <ContactLink href='tel: 8003189030' tooltip='Give us a call'>
          <div className='flex flex-col gap-4 items-center text-center'>
            <p>
              <RiPhoneLine />
            </p>
            <p className='text-sm'>(800) 318-9030</p>
          </div>
        </ContactLink>
        <ContactLink
          href='mailto: support@fullblastgear.com'
          tooltip='Send us an Email'
        >
          <div className='flex flex-col gap-4 items-center text-center'>
            <p>
              <RiMailLine />
            </p>
            <p className='text-sm'>support@fullblastgear.com</p>
          </div>
        </ContactLink>
        <ContactLink
          href='https://www.google.com/maps/place/9809+Cypress+Point+Cir,+Lone+Tree,+CO+80124/@39.537544,-104.899762,13z/data=!4m6!3m5!1s0x876c84e4cb4dffad:0x612123c06cfc8658!8m2!3d39.5375441!4d-104.8997622!16s%2Fg%2F11tk474993?hl=en&entry=ttu'
          tooltip='Open map in new window'
        >
          <div className='flex flex-col gap-4 items-center text-center'>
            <p>
              <PiMapPinLineBold />
            </p>
            <p className='text-sm'>
              9809 Cypress Point Cir, Lone Tree, CO 80124
            </p>
          </div>
        </ContactLink>
      </div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24615.826234836106!2d-104.899762!3d39.537544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c84e4cb4dffad%3A0x612123c06cfc8658!2s9809%20Cypress%20Point%20Cir%2C%20Lone%20Tree%2C%20CO%2080124!5e0!3m2!1sen!2sus!4v1698715408062!5m2!1sen!2sus'
        loading='eager'
        width='100%'
        height='440'
        className='border-0'
        allowFullScreen
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

const ContactLink: React.FC<ContactLinkProps> = ({
  href,
  tooltip,
  children
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(href, '_blank');
  };

  return (
    <div
      className={`${
        isHovered ? 'text-green-600' : ''
      } cursor-pointer tooltip tooltip-bottom tooltip-primary w-44`}
      data-tip={tooltip}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default ContactMap;
