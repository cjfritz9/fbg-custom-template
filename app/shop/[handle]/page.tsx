import { ProductMetadata } from '@/@types/metadata';
import { getProductByHandle } from '@/app/api/requests';
import { notFound } from 'next/navigation';
import React from 'react'

export const generateMetadata = async ({ params: { handle } }: ProductMetadata) => {
  const product = await getProductByHandle(handle)

  if (!product) {
    return notFound();
  }

  return {
    title: product.title
  }
}

const ProductPage: React.FC<ProductMetadata> = async (
  { params: { handle } }
) => {
  const product = await getProductByHandle(handle);

  if (!product) {
    return notFound();
  }


  return (
    <div>
      
    </div>
  );
}

export default ProductPage;