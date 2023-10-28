'use client';

import { AccordionProps } from '@/@types/props';
import React, { useState } from 'react';

const Accordion: React.FC<AccordionProps> = ({ title, children, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className='collapse collapse-plus bg-base-100'>
      <input
        type='checkbox'
        name={title + '-accordion'}
        checked={isExpanded}
        onChange={() => setIsExpanded((prev) => !prev)}
      />
      <div className='collapse-title text-xl font-medium'>{title}</div>
      <div className='collapse-content'>{children}</div>
    </div>
  );
};

export default Accordion;
