import React from 'react';
import { footerLinks } from '@/lib/static/links';

import FooterLinkGroup from './FooterLinkGroup';

const FooterLinks: React.FC = () => {
  const companyLinks = footerLinks['companyLinks'];
  const policyLinks = footerLinks['policyLinks'];
  const infoLinks = footerLinks['informationalLinks'];

  return (
    <div className='flex gap-16'>
      <FooterLinkGroup title='Company' links={companyLinks} />
      <FooterLinkGroup title='Policies' links={policyLinks} />
      <FooterLinkGroup title='Information' links={infoLinks} />
    </div>
  );
};

export default FooterLinks;
