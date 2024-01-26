import React, { PropsWithChildren } from 'react';
import { PartnerMetadata } from '@/@types/metadata';
import { notFound, useParams } from 'next/navigation';
import { fetchPartnerByHandle } from '@/shopify/content/content.model';

interface Props extends PropsWithChildren {
  params: {
    handle: string;
  };
}

export const generateMetadata = async ({
  params: { handle }
}: PartnerMetadata) => {
  const partner = await fetchPartnerByHandle(handle);

  if (!partner) {
    return notFound();
  }

  return {
    title: `Partners - ${partner.name}`
  };
};

const PartnerLayout: React.FC<Props> = async ({
  params: { handle },
  children
}) => {
  const content = await fetchPartnerByHandle(handle);
  if (!content) return notFound();

  return <div>{children}</div>;
};

export default PartnerLayout;
