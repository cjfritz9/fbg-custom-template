import { loadStaticPaths } from 'next/dist/server/dev/static-paths-worker';
import React, { PropsWithChildren } from 'react';
import { headers } from 'next/headers';
import Link from 'next/link';

const ProductLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const headerInstance = headers();
  const pathname = headerInstance.get('next-url') ?? '';
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
    <div className='flex flex-col w-full h-auto bg-base-100 lg:py-8 lg:px-8 xl:py-16 xl:px-28'>
      <div className='flex gap-2 text-primary uppercase text-xs'>
        {crumbs.map((crumb, i) => (
          <>
            {i < crumbs.length - 1 ? (
              <>
                <Link
                  key={crumb.name}
                  href={`/${crumb.path}`}
                  className='underline underline-offset-2 hover:text-secondary font-bold'
                >
                  {crumb.name}
                </Link>
                <div className='select-none'>{'>'}</div>
              </>
            ) : (
              <p className='select-none'>{crumb.name}</p>
            )}
          </>
        ))}
      </div>
      {children}
    </div>
  );
};

export default ProductLayout;
