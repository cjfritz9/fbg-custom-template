import { ProductMetadata } from '@/@types/metadata';
import { getProductByHandle } from '@/app/api/requests';
import Button from '@/components/actions/Button';
import Border from '@/components/layout/Border';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { IoStar } from 'react-icons/io5';
import { TbChevronCompactUp, TbChevronCompactDown } from 'react-icons/tb';

export const generateMetadata = async ({
  params: { handle }
}: ProductMetadata) => {
  const product = await getProductByHandle(handle);

  if (!product) {
    return notFound();
  }

  return {
    title: product.title
  };
};

const ProductPage: React.FC<ProductMetadata> = async ({
  params: { handle }
}) => {
  const product = await getProductByHandle(handle);
  const { images } = product;

  if (!product) {
    return notFound();
  }

  return (
    <section className='flex flex-col lg:flex-row gap-8 text-primary'>
      <div className='flex flex-col h-full justify-between'>
        <div className='flex flex-col gap-4'>
          <Button styles='bg-base-100 border-0 !w-full -mb-8 hover:bg-base-100'>
            <TbChevronCompactUp className='text-4xl text-base-200' />
          </Button>
          {images.slice(0, 4).map((image) => (
            <Image
              key={image.url}
              src={image.url}
              alt={image.altText}
              height={256}
              width={256}
              className='w-28 h-28 object-cover'
            />
          ))}
        </div>
        <Button styles='bg-base-100 border-0 !w-full -mt-4 hover:bg-base-100'>
          <TbChevronCompactDown className='text-4xl text-base-200' />
        </Button>
      </div>
      <div className='flex justify-center max-h-[556px] w-[720px]'>
        <Image
          src={images[0].url}
          alt={images[0].altText}
          height={800}
          width={800}
          className='object-cover object-center h-auto w-max max-h-[556px]'
        />
      </div>
      <div className='flex flex-col gap-8 max-w-[40rem]'>
        <div>
          <h2 className='text-3xl font-bold'>{product.title}</h2>
          <div className='flex gap-2 text-secondary text-xl font-bold items-center w-[656px]'>
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <p className='text-sm font-semibold text-primary'>(45)</p>
          </div>
        </div>
        <Border />
        <div>
          <p className='uppercase font-semibold text-xl pb-4'>Specs</p>
          <ul className='custom-scroll list-disc pl-5 max-h-48 overflow-y-auto'>
            <li>
              Material: Galvanized Carbon Steel, Solid Brass, Micro Suede, Nylon
              Mesh, Polyvinyl, Molded Plastic.
            </li>
            <li>
              Size/Dimensions: Length - 40″ Width - Variable per gauge and
              caliber
            </li>
            <li>Colors: Bright Red, Blaze Orange, Safety Green</li>
            <li>
              Compatible: Bore Chore Quick Connect Release System - Shotgun
            </li>
            <li>Manufactured: USA</li>
          </ul>
        </div>
        <Border />
        <div className='flex flex-col gap-4'>
          <h4 className='text-3xl font-bold tracking-widest'>$74.99</h4>
          <Button styles='btn-primary !w-full'>ADD TO CART</Button>
        </div>
        <Border />
      </div>
    </section>
  );
};

export default ProductPage;
