'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FooterLinkGroupProps } from '@/@types/props';
import Link from 'next/link';

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ title, links }) => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const pathnameIndex = links.findIndex((link) => link.slug === pathname);
    if (pathnameIndex >= 0) {
      setActiveIndex(pathnameIndex);
    } else {
      setActiveIndex(null);
    }
  }, [pathname, links]);

  return (
    <div className='flex flex-col items-start w-44'>
      <h4 className='font-semibold mb-4'>{title}</h4>
      <div className='tabs flex flex-col gap-4'></div>
      {links.map((link, i) => (
        <Link
          key={i}
          href={link.slug}
          className={`tab font-semibold px-0 ${i === activeIndex && 'tab-active'}`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinkGroup;
