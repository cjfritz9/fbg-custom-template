'use client';

import { FormattedProduct } from '@/@types/context';
import ProductMenu from '@/components/actions/ProductMenu';
import ProductCard from '@/components/layout/ProductCard';
import React, { useEffect, useState } from 'react';
import { getAllProducts } from '@/app/api/requests';

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<FormattedProduct[]>([]);

  useEffect(() => {
    (async () => {
      setProducts(await getAllProducts())
    })();
  }, []);

  return (
    <div className='flex w-full h-auto bg-base-100'>
      <ProductMenu setProducts={setProducts} />
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
    </div>
  );
};

export default ShopPage;
