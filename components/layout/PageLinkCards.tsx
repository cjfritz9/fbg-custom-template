import React from 'react';
import { PageLinkCardsProps } from '@/@types/props';
import PageLinkCard from './PageLinkCard';

const PageLinkCards: React.FC<PageLinkCardsProps> = ({ slugPrefix, showButton, textSize, cards }) => {
  return (
    <div className='flex flex-wrap lg:py-12 gap-8 w-full justify-center'>
      {cards.map((card) => (
        <PageLinkCard
          showButton={showButton}
          textSize={textSize}
          key={card.title}
          title={card.title}
          slug={`/${slugPrefix}/${card.title.replaceAll(' ', '-').toLowerCase()}`}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default PageLinkCards;
