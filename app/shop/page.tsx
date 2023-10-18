'use client';

import { FormattedProduct } from '@/@types/context';
import ProductMenu from '@/components/actions/ProductMenu';
import ProductCard, { LoadingCards } from '@/components/layout/ProductCard';
import React, { Suspense, useEffect, useState } from 'react';
import { getAllProducts } from '@/app/api/requests';

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<FormattedProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const onUpdateProducts = (updatedProducts: FormattedProduct[]) => {
    setProducts(updatedProducts);
  };

  const onLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  useEffect(() => {
    (async () => {
      setProducts(await getAllProducts());
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className='flex w-full h-auto bg-base-100'>
      <ProductMenu onUpdateProducts={onUpdateProducts} onLoading={onLoading} />
      {isLoading ? (
        <LoadingCards />
      ) : (
        <div className='flex flex-wrap gap-12 lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
          {products.map((product) => (
            <ProductCard
              key={product.handle}
              title={product.title}
              handle={`/shop/${product.handle}`}
              description={product.description}
              imageSrc={product.images[0].url}
              imageAlt={product.images[0].altText}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
