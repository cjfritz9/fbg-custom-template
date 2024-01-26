import { ShopifyImage } from '@/@types/api';
import { PartnerCardProps } from '@/@types/props';
import ShopifyRichText from '@/shopify/content/richtext-to-html';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  handle,
  logo,
  excerpt,
  index
}) => {
  const isEven = index % 2 !== 0;

  return (
    <div
      className={`card lg:card-side bg-base-200 shadow-xl mb-8 md:mb-24 ${
        isEven && 'lg:flex-row-reverse'
      }`}
    >
      <figure className='max-w-[720px]'>
        <Image
          height={480}
          width={480}
          src={logo.url}
          alt={logo.altText}
          className='object-cover'
        />
      </figure>
      <div className='card-body lg:w-96'>
        <h3 className='card-title text-2xl'>{name}</h3>
        <ShopifyRichText {...JSON.parse(excerpt)} options={[]} />
        <div className={`card-actions w-full ${!isEven && 'lg:justify-end'}`}>
          <Link href={`/partners/${handle}`}>
            <button className='btn btn-primary'>LEARN MORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const LoadingPartnerCard: React.FC = () => {
  return (
    <div
      className={`animate-pulse card lg:card-side bg-base-200 shadow-xl mb-8 md:mb-24`}
    >
      <figure className='lg:max-w-[720px]'>
        <div className='object-cover w-full lg:w-[720px] !h-[480px] bg-gray-400' />
      </figure>
      <div className='card-body lg:w-96'>
        <h3 className='card-title text-2xl bg-gray-500 mb-4 h-12 w-full sm:w-64'></h3>
        <div className='h-full'>
          <div className='h-4 w-full bg-gray-400 mb-2' />
          <div className='h-4 w-full bg-gray-400 mb-2' />
          <div className='h-4 w-full bg-gray-400 mb-2' />
          <div className='h-4 w-full bg-gray-400 mb-2' />
          <div className='h-4 w-full bg-gray-400 mb-2' />
          <div className='h-4 w-full bg-gray-400 mb-2' />
        </div>
        <div className={`card-actions w-full justify-end`}>
          <button className='btn bg-gray-500 h-12 w-32'></button>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
