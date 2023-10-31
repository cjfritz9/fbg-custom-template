import ContactForm from '@/components/actions/ContactForm';
import ContactMap from '@/components/actions/ContactMap';
import React from 'react';
import ContactProviders from './providers';

const ContactPage: React.FC = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row w-full gap-16 lg:gap-48'>
        <ContactProviders>
          <ContactForm />
        </ContactProviders>
        <div className='flex w-full'>
          <ContactMap />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
