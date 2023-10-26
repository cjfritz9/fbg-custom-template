'use client';

import React, { useState } from 'react';
import { PaginationBarProps } from '@/@types/props';
import { getPaginatedProducts } from '@/app/api/requests';

const PaginationBar: React.FC<PaginationBarProps> = ({
  cursors,
  hasPages,
  onUpdateProducts,
  onLoading
}) => {
  const [page, setPage] = useState(1);

  const handleClick = async (nextPage: boolean, usedCursor: string | null) => {
    const container = document.getElementById('cards-container')!;
    container.scrollIntoView({block: 'start', behavior: 'smooth'})
    onLoading(true);
    const { pageInfo, products } = await getPaginatedProducts(
      `nextPage=${nextPage}&cursor=${usedCursor}`
    );
    if (nextPage) {
      setPage((prev) => prev + 1);
    } else {
      setPage((prev) => prev - 1);
    }
    onUpdateProducts(products, pageInfo);
    onLoading(false);
  };

  return (
    <div className='join align-center justify-center lg:justify-start mt-8'>
      <button
        className={`join-item btn bg-base-100 border ${
          !hasPages.prev || page === 1 ? 'btn-disabled' : ''
        } hover:text-white`}
        onClick={() => handleClick(false, cursors[0])}
      >
        «
      </button>
      <span className='join-item btn btn-disabled !bg-base-100 !text-primary grow lg:grow-0 max-w-[236px]'>{`Page ${page}`}</span>
      <button
        className={`join-item btn bg-base-100 ${
          !hasPages.next ? 'btn-disabled' : ''
        } hover:text-white`}
        onClick={() => handleClick(true, cursors[1])}
      >
        »
      </button>
    </div>
  );
};

export default PaginationBar;
