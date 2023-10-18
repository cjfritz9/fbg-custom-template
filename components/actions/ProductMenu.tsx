'use client';

import React from 'react';
import { ProductMenuProps } from '@/@types/props';
import { FilterMethods, SortMethods } from '@/@types/shop';
import { getProductsByTag } from '@/app/api/requests';

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
  };

  return (
    <div className='py-12 bg-base-300'>
      <div className='flex flex-col w-80 sticky top-16 items-center'>
        <p className='text-xl font-semibold py-4'>SORT</p>
        <div className='tabs flex flex-col gap-2 text-sm pb-4 opacity-70 items-center'>
          <p
            className='tab text-white'
            onClick={() => handleSortClick('featured')}
          >
            FEATURED
          </p>
          <p
            className='tab text-white'
            onClick={() => handleSortClick('newest')}
          >
            NEWEST
          </p>
          <p
            className='tab text-white'
            onClick={() => handleSortClick('highest rated')}
          >
            HIGHEST RATED
          </p>
          <p
            className='tab text-white'
            onClick={() => handleSortClick('price - low')}
          >
            PRICE - LOW
          </p>
          <p
            className='tab text-white'
            onClick={() => handleSortClick('price - high')}
          >
            PRICE - HIGH
          </p>
        </div>
        <p className='text-xl font-semibold py-4'>FILTER</p>
        <div className='tabs flex flex-col gap-2 text-sm pb-4 opacity-70 items-center'>
          <p
            className='tab text-white'
            onClick={() => handleFilterClick('full kits')}
          >
            FULL KITS
          </p>
          <p
            className='tab text-white'
            onClick={() => handleFilterClick('parts')}
          >
            PARTS
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductMenu;
