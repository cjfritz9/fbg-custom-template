import React, { PropsWithChildren } from 'react';
import Breadcrumbs from '@/components/actions/Breadcrumbs';
import { ProductMetadata } from '@/@types/metadata';
import { getProductByHandle } from '@/app/api/requests';
import { notFound } from 'next/navigation';

export const generateMetadata = async ({
  params: { handle }
}: ProductMetadata) => {
  const product = await getProductByHandle(handle);

  if (!product) {
    return notFound();
  }

  return {
    title: `Full Blast USA | ${product.title}`
  };
};

const ProductLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col w-full h-auto bg-base-100 py-8 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
      <Breadcrumbs />
      {children}
    </div>
  );
};

export default ProductLayout;
