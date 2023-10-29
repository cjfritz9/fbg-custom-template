import React from 'react';
import { PageLinkCardProps, PageLinkCardsProps } from '@/@types/props';
import Link from 'next/link';
import Image from 'next/image';

const PageLinkCards: React.FC<PageLinkCardsProps> = ({ cards }) => {
  return (
    <div className='flex flex-wrap lg:py-12 gap-12 w-full justify-center'>
      {cards.map((card) => (
        <PageLinkCard
          key={card.title}
          title={card.title}
          slug={`/about/${card.title.replaceAll(' ', '-').toLowerCase()}`}
          image={card.image}
        />
      ))}
    </div>
  );
};

const PageLinkCard: React.FC<PageLinkCardProps> = ({ title, image, slug }) => {
  return (
    <Link href={slug}>
      <div className='flex justify-center w-[560px] h-64 text-base-100 brightness-90 hover:brightness-100 [text-shadow:_0px_2px_4px_black] relative bg-accent'>
        <h3 className='absolute uppercase text-4xl bottom-2 font-semibold z-10'>{title}</h3>
        <Image
          src={image.url}
          alt={image.altText}
          height={256}
          width={560}
          className='object-cover object-center'
        />
      </div>
    </Link>
  );
};

export default PageLinkCards;
