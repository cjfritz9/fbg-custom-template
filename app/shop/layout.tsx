'use client';

import ProductMenu from '@/components/actions/ProductMenu';
import React, { PropsWithChildren } from 'react';

const ProductsLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex w-full h-auto bg-base-100'>
      {children}
    </div>
  );
};

export default ProductsLayout;
