'use client';

import React, { useEffect, useState } from 'react';
import { Combobox } from '@headlessui/react';
import { useDebounce } from 'use-debounce';
import useIsClient from '@/lib/hooks/useIsClient';
import { useRouter } from 'next/navigation';
import { getProductsByQuery } from '@/app/api/requests';
import { QueryResult } from '@/@types/api';

/** Implements Combobox from '@headlessui/react'
 *
 * https://headlessui.com/react/combobox
 */
const SearchBar: React.FC = () => {
  const router = useRouter();
  const isClient = useIsClient();
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<QueryResult[]>([]);
  const [debouncedQuery] = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery.length > 1) {
      const controller = new AbortController();
      (async () => {
        const results = await getProductsByQuery(debouncedQuery);

        if (results.length === 0) {
          setProducts([{ title: 'No Results', handle: '' }]);
        } else {
          setProducts(results);
        }
      })();
      return () => {
        controller.abort();
      };
    } else {
      setProducts([]);
    }
  }, [debouncedQuery]);

  if (!isClient) {
    return (
      <div className='form-control'>
        <input
          type='text'
          placeholder='Search'
          className='input input-bordered border-primary bg-primary-content w-24 md:w-auto disabled'
        />
      </div>
    );
  }

  const handleChange = (slug: string) => {
    router.push(`/${slug}`);
  };

  return (
    <div className='form-control hidden lg:inline-block'>
      <div className='relative'>
        <Combobox onChange={handleChange}>
          <Combobox.Input
            placeholder='Search...'
            className='input input-bordered border-primary bg-primary-content w-24 md:w-auto'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Combobox.Options className='absolute bg-base-100 py-1 w-full z-50'>
            {products.map((product) => (
              <Combobox.Option key={product.handle} value={product.handle}>
                {({ active }) => (
                  <span
                    className={`block px-2 truncate w-full ${
                      active && products[0]
                        ? 'bg-neutral text-secondary'
                        : 'bg-base-200 text-secondary'
                    }`}
                  >
                    {product.title}
                  </span>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
      </div>
    </div>
  );
};

export default SearchBar;
