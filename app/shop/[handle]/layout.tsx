import React, { PropsWithChildren } from 'react';
import Breadcrumbs from '@/components/actions/Breadcrumbs';

const ProductLayout: React.FC<PropsWithChildren> = ({ children }) => {

  return (
    <div className='flex flex-col w-full h-auto bg-base-100 lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
      <Breadcrumbs />
      {children}
    </div>
  );
};

export default ProductLayout;
