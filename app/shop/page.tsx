'use client';

import ProductMenu from '@/components/actions/ProductMenu';
import ProductCard, { LoadingCards } from '@/components/layout/ProductCard';
import React, { useEffect, useState } from 'react';
import { FormattedProduct, PageInfo } from '@/@types/api';
import { PaginationData } from '@/@types/shop';
import { fetchProducts } from '@/graphql/products/products.model';
import { getProducts } from '../api/requests';
import PaginationBar from '@/components/actions/PaginationBar';

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<FormattedProduct[]>([]);
  const [hasPages, setHasPages] = useState({ prev: false, next: true });
  const [isLoading, setIsLoading] = useState(true);
  const [paginationData, setPaginationData] = useState<PaginationData>({
    startCursor: null,
    endCursor: null,
    hasNextPage: true,
    hasPreviousPage: false
  });

  const onUpdateProducts = (
    updatedProducts: FormattedProduct[],
    updatedPageInfo: PageInfo
  ) => {
    setProducts(updatedProducts);
    setPaginationData(updatedPageInfo);
    setHasPages({
      prev: updatedPageInfo.hasPreviousPage,
      next: updatedPageInfo.hasNextPage
    });
  };

  const onLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  useEffect(() => {
    (async () => {
      const { pageInfo, products } = await getProducts();
      const { hasNextPage, hasPreviousPage, startCursor, endCursor } = pageInfo;
      setProducts(products);
      setPaginationData({
        hasNextPage,
        hasPreviousPage,
        startCursor: hasPreviousPage ? startCursor : null,
        endCursor: hasNextPage ? endCursor : null
      });
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className='flex w-full h-auto bg-base-100'>
      <ProductMenu onUpdateProducts={onUpdateProducts} onLoading={onLoading} />
      <div className='flex flex-wrap gap-12 lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
        <PaginationBar
          cursors={[paginationData.startCursor, paginationData.endCursor]}
          hasPages={hasPages}
          onLoading={onLoading}
          onUpdateProducts={onUpdateProducts}
        />
        {isLoading ? (
          <LoadingCards />
        ) : (
          products.map((product, i) => (
            <ProductCard
              priority={i < 4}
              key={product.handle}
              title={product.title}
              handle={`/shop/${product.handle}`}
              imageSrc={product.images[0].url}
              imageAlt={product.images[0].altText}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ShopPage;
