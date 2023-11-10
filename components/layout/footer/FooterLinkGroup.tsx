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
    <div className='lg:block flex-col text-primary items-start w-28 md:w-44'>
      <Link prefetch={false} href={`/${title.toLowerCase()}`}>
        <p className='font-semibold pb-4 text-center text-lg sm:text-right w-full hover:underline'>
          {title}
        </p>
      </Link>
      <div className='tabs hidden lg:flex flex-col w-full'>
        {links.map((link, i) => (
          <Link
            prefetch={false}
            key={i}
            href={link.slug}
            target={link.slug.includes('https://') ? '_blank' : undefined}
            className={`tab font-semibold px-0 text-primary text-opacity-70 !w-full h-fit text-left self-start ${
              i === activeIndex && 'tab-active text-secondary'
            }`}
          >
            <p className='text-center sm:text-right w-full pb-2'>{link.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinkGroup;
