import React from 'react';
import { PaginationBarProps } from '@/@types/props';

const PaginationBar: React.FC<PaginationBarProps> = ({
  href,
  page,
  pageCount
}) => {
  return (
    <div className='join'>
      <button className='join-item btn'>«</button>
      <button className='join-item btn'>Page 22</button>
      <button className='join-item btn'>»</button>
    </div>
  );
};

export default PaginationBar;
