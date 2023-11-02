'use client';

import { ProductMenuGroupProps } from '@/@types/props';
import { SortMethods } from '@/@types/shop';
import React, { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

const ProductMenuGroup: React.FC<ProductMenuGroupProps> = ({
  category,
  options,
  onMenuSelect
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className='flex flex-col w-48 lg:w-64 items-left px-8 -mb-4 lg:mb-0 h-full'>
      <div
        className='flex w-full justify-between items-baseline cursor-pointer px-2 pb-2 text-primary'
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        <p className='text-xl font-semibold'>{category}</p>
        {isCollapsed ? <IoChevronDown /> : <IoChevronUp />}
      </div>
      <div className='tabs flex flex-col gap-2 text-sm pb-4 opacity-90 items-start lg:w-full'>
        {!isCollapsed &&
          options.map((option) => (
            <p
              key={option}
              className='tab text-primary hover:underline text-left h-fit'
              onClick={() => onMenuSelect(option.toLowerCase() as SortMethods)}
            >
              {option}
            </p>
          ))}
      </div>
    </div>
  );
};

export default ProductMenuGroup;
