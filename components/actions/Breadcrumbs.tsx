'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const crumbs = [
    { name: 'homepage', path: '/' },
    ...pathname
      .split('/')
      .slice(1)
      .map((crumb, i, arr) => ({
        name: crumb.replaceAll('-', ' '),
        path: arr.slice(0, i + 1).join('/')
      }))
  ];

  return (
    <div className='hidden breadcrumbs xl:flex gap-2 text-primary uppercase text-xs'>
      <ul>
        {crumbs.map((crumb, i) =>
          i < crumbs.length - 1 ? (
            <li key={crumb.name}>
              <Link
                prefetch={false}
                href={`/${crumb.path}`}
                className='underline underline-offset-2 hover:text-secondary font-bold'
              >
                {crumb.name}
              </Link>
            </li>
          ) : (
            <li key={crumb.name} className='select-none'>
              {crumb.name}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
