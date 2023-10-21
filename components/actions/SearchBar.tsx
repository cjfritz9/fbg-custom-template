'use client';

import React, { useEffect, useState } from 'react';
import { Combobox } from '@headlessui/react';
import { useDebounce } from 'use-debounce';
import useIsClient from '@/lib/hooks/useIsClient';
import { useRouter } from 'next/navigation';
import { getProductsByQuery } from '@/app/api/requests';
import { QueryResult } from '@/@types/api';
import Image from 'next/image';
import Border from '../layout/Border';
import { SearchBarProps } from '@/@types/props';

/** Implements Combobox from '@headlessui/react'
 *
 * https://headlessui.com/react/combobox
 */
const SearchBar: React.FC<SearchBarProps> = ({ variant }) => {
  const router = useRouter();
  const isClient = useIsClient();
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [products, setProducts] = useState<QueryResult[]>([]);
  const [debouncedQuery] = useDebounce(query, 300);

  const handleChange = (slug: string) => {
    router.push(`/shop/${slug}`);
  };

  useEffect(() => {
    if (debouncedQuery.length > 1) {
      setIsSearching(true);
      const controller = new AbortController();
      (async () => {
        const results = await getProductsByQuery(debouncedQuery);

        if (results.length === 0) {
          setProducts([{ image: '', title: 'No Results', handle: '' }]);
        } else {
          setProducts(results);
        }
        setIsSearching(false);
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

  const noResults = products[0] && products[0].title === 'No Results';

  if (variant === 'header') {
    return (
      <div className='form-control hidden lg:inline-block'>
        <div className='relative'>
          {isSearching && (
            <div className='loading loading-spinner loading-md text-secondary absolute right-4 top-3' />
          )}
          <Combobox onChange={handleChange}>
            <Combobox.Input
              placeholder='Search...'
              className={`input input-bordered border-primary bg-primary-content w-96 xl:w-[560px]
              transition-all duration-1000`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <Combobox.Options
              className={`absolute bg-base-100 w-full z-50 ${
                noResults ? 'pointer-events-none' : 'cursor-pointer'
              }`}
            >
              {products.map((product) => (
                <>
                  <Border />
                  <Combobox.Option key={product.handle} value={product.handle}>
                    {({ active }) => (
                      <span
                        className={`flex gap-4 h-20 items-center w-full text-xl text-primary ${
                          active && !noResults
                            ? 'bg-neutral text-secondary'
                            : 'bg-base-200'
                        }`}
                      >
                        {!noResults && (
                          <Image
                            src={product.image}
                            alt={`Search result image for ${product.title}`}
                            height={80}
                            width={80}
                            className='w-20 h-20 object-cover object-center'
                          />
                        )}
                        <p
                          className={`truncate pr-2 ${
                            noResults && 'text-center w-full'
                          }`}
                        >
                          {product.title}
                        </p>
                      </span>
                    )}
                  </Combobox.Option>
                </>
              ))}
            </Combobox.Options>
          </Combobox>
        </div>
      </div>
    );
  }

  if (variant === 'drawer') {
    return (
      <div className='form-control w-full mb-4'>
        <div className='relative w-full'>
          <Combobox onChange={handleChange}>
          {isSearching && (
            <div className='loading loading-spinner loading-md text-secondary absolute right-4 top-3' />
          )}
            <Combobox.Input
              placeholder='Search...'
              className={`input input-bordered border-primary bg-primary-content w-full`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <Combobox.Options
              className={`bg-base-100 truncate w-full ${
                noResults ? 'pointer-events-none' : 'cursor-pointer'
              }`}
            >
              {products.map((product) => (
                <>
                  <Border />
                  <Combobox.Option key={product.handle} value={product.handle}>
                    {({ active }) => (
                      <span
                        className={`flex gap-4 h-8 items-center text-md text-primary bg-base-100 w-full ${
                          active && !noResults ? 'text-secondary' : ''
                        }`}
                      >
                        <p
                          className={`truncate pr-2 ${
                            noResults && 'text-center w-full'
                          }`}
                        >
                          {product.title}
                        </p>
                      </span>
                    )}
                  </Combobox.Option>
                </>
              ))}
            </Combobox.Options>
          </Combobox>
        </div>
      </div>
    );
  }
};

export default SearchBar;
