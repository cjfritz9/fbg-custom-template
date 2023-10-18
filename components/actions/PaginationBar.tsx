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
    <div className='join w-full align-center'>
      <button
        className={`join-item btn ${
          !hasPages.prev || page === 1 ? 'btn-disabled' : ''
        } hover:text-white`}
        onClick={() => handleClick(false, cursors[0])}
      >
        «
      </button>
      <span className='join-item btn btn-disabled !bg-neutral !text-primary'>{`Page ${page}`}</span>
      <button
        className={`join-item btn ${
          !hasPages.next && 'btn-disabled'
        } hover:text-white`}
        onClick={() => handleClick(true, cursors[1])}
      >
        »
      </button>
    </div>
  );
};

export default PaginationBar;
