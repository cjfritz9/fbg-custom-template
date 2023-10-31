'use client';

import React from 'react';

const ContactMap: React.FC = () => {
  return (
    <div>
      <div className='flex w-full justify-between mb-8'></div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24615.826234836106!2d-104.899762!3d39.537544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c84e4cb4dffad%3A0x612123c06cfc8658!2s9809%20Cypress%20Point%20Cir%2C%20Lone%20Tree%2C%20CO%2080124!5e0!3m2!1sen!2sus!4v1698715408062!5m2!1sen!2sus'
        loading='eager'
        width='800'
        height='450'
        className='border-0'
        allowFullScreen
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default ContactMap;
