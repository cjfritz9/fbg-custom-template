'use client';

import React from 'react';
import { ProductMenuProps } from '@/@types/props';
import { FilterMethods, SortMethods } from '@/@types/shop';
import { getProductsByTag } from '@/app/api/requests';
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

  const handleSortClick = async (option: SortMethods) => {
    // TODO: ADD & IMPLEMENT SORTING FUNCTION
    if (option === 'featured' || option === 'newest') {
      handleFilterClick(option);
    } else {
    }
  };

  return (
    <div className='py-4 lg:py-16 bg-accent sticky top-0 z-10'>
      <div className='flex lg:flex-col sticky top-16'>
        <ProductMenuGroup
          category='SORT'
          onMenuSelect={handleSortClick}
          options={[
            'FEATURED',
            'NEWEST',
            'HIGHEST RATED',
            'PRICE - LOW',
            'PRICE - HIGH'
          ]}
        />
        <ProductMenuGroup
          category='FILTER'
          onMenuSelect={handleFilterClick}
          options={['FULL KITS', 'PARTS']}
        />
      </div>
    </div>
  );
};

export default ProductMenu;
