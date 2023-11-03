'use client';

import React, { useEffect } from 'react';
import { ProductMenuProps } from '@/@types/props';
import { FilterMethods, SortMethods } from '@/@types/shop';
import { getProducts, getProductsByTag } from '@/app/api/requests';
import ProductMenuGroup from './ProductMenuGroup';
import { useRouter, useSearchParams } from 'next/navigation';

const ProductMenu: React.FC<ProductMenuProps> = ({
  onUpdateProducts,
  onLoading
}) => {
  const router = useRouter();

  const handleFilterClick = async (option: FilterMethods) => {
    onLoading(true);
    const { products, pageInfo } = await getProductsByTag(option);
    onUpdateProducts(products, pageInfo);
    router.push('/shop?page=1');
    onLoading(false);
  };

  const handleShowAll = async () => {
    onLoading(true);
    const { products, pageInfo } = await getProducts();
    onUpdateProducts(products, pageInfo);
    router.push('/shop?page=1');
    onLoading(false);
  };

  return (
    <div className='py-4 lg:py-16 bg-base-100 sticky top-0 z-10'>
      <div className='flex lg:flex-col justify-center sticky top-16'>
        <p
          className='ml-6 mb-6 tab text-primary self-start hover:underline text-left h-fit'
          onClick={handleShowAll}
        >
          SHOW ALL
        </p>
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
