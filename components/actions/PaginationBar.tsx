'use client';

import React, { useState } from 'react';
import { PaginationBarProps, PaginationLinkProps } from '@/@types/props';
import Link from 'next/link';
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
      {/* <PaginationLink href={`${href}?nextPage=false&cursor=${cursor}`}> */}
      <button
        className={`join-item btn ${
          !hasPages.prev && 'btn-disabled'
        } hover:text-white`}
        onClick={() => handleClick(false, cursors[0])}
      >
        «
      </button>
      {/* </PaginationLink> */}
      <span className='join-item btn btn-disabled !bg-neutral !text-black'>{`Page ${page}`}</span>
      {/* <PaginationLink href={`${href}?nextPage=true&cursor=${cursor}`}> */}
      <button
        className={`join-item btn ${
          !hasPages.next && 'btn-disabled'
        } hover:text-white`}
        onClick={() => handleClick(true, cursors[1])}
      >
        »
      </button>
      {/* </PaginationLink> */}
    </div>
  );
};

// const PaginationLink: React.FC<PaginationLinkProps> = ({ children, href }) => {
//   return (
//     <Link
//       prefetch
//       href={href}
//       className='border rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700'
//     >
//       {children}
//     </Link>
//   );
// };

export default PaginationBar;
