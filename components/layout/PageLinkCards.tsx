import React from 'react';
import { PageLinkCardsProps } from '@/@types/props';
import PageLinkCard from './PageLinkCard';

const PageLinkCards: React.FC<PageLinkCardsProps> = ({ cards }) => {
  return (
    <div className='flex flex-wrap lg:py-12 gap-8 w-full justify-center'>
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

export default PageLinkCards;
