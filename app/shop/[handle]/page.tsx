import { ProductMetadata } from '@/@types/metadata';
import { getProductByHandle } from '@/app/api/requests';
import ProductGallery from '@/components/layout/ProductGallery';
import ProductReviews from '@/components/layout/ProductReviews';
import { notFound } from 'next/navigation';
import React from 'react';
import ProductPanel from '@/components/layout/ProductPanel';
import ProductImages from '@/components/layout/ProductImages';

const ProductPage: React.FC<ProductMetadata> = async ({
  params: { handle }
}) => {
  const product = await getProductByHandle(handle);

  if (!product) {
    return notFound();
  }
  const { images } = product;

  return (
    <main>
      <section className='flex-col lg:flex-row gap-8 text-primary inline-flex'>
        <ProductImages images={images} />
        <ProductPanel product={product} />
      </section>
      <ProductReviews product={product} reviews={product.reviews} />
      <section className='mt-12'>
        <ProductGallery
          title='Similar Products'
          subtitle=''
          productsTag={product?.tags![0] ?? 'popular'}
          length={5}
        />
      </section>
    </main>
  );
};

export default ProductPage;
