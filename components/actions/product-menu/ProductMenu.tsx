'use client';

import React from 'react';
import { ProductMenuProps } from '@/@types/props';
import { FilterMethods, SortMethods } from '@/@types/shop';
import { getProductsByTag, getProductsSortedByTag } from '@/app/api/requests';
import ProductMenuGroup from './ProductMenuGroup';

const ProductMenu: React.FC<ProductMenuProps> = ({
  onUpdateProducts,
  onLoading
}) => {
  const handleFilterClick = async (option: FilterMethods) => {
    onLoading(true);
    const { products, pageInfo } = await getProductsByTag(option);
    onUpdateProducts(products, pageInfo);
    onLoading(false);
  };

  return (
    <div className='py-4 lg:py-16 bg-base-100 sticky top-0 z-10'>
      <div className='flex lg:flex-col sticky top-16'>
        <ProductMenuGroup
          category='FILTER'
          onMenuSelect={handleFilterClick}
          options={['FEATURED', 'NEWEST', 'POPULAR', 'FULL KITS', 'PARTS']}
        />
      </div>
    </div>
  );
};

export default ProductMenu;
