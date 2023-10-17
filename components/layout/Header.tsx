import React from 'react';
import Link from 'next/link';
import Logo from '../UI/Logo';
import ThemeButton from '../actions/ThemeButton';
import SearchBar from '../actions/SearchBar';
import { navLinks } from '@/lib/static/links';
import Border from './Border';

const Header: React.FC = () => {
  return (
    <div>
      <div className='navbar bg-base-300 h-32 px-12 text-primary z-[15]'>
        <div className='flex-1 align-center'>
          <Logo />
        </div>
        <div className='flex-none gap-4'>
          <ThemeButton />
          <SearchBar />
          <ul className='menu menu-horizontal px-1 gap-4'>
            <li className='w-32'>
              <details>
                <summary className='hover:text-white hover:text-opacity-75 text-white normal-case text-xl'>
                  Menu
                </summary>
                <ul className='p-2 bg-base-300 right-0 top-10 w-32 z-[15]'>
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        prefetch
                        href={link.slug}
                        className='text-white normal-case text-xl'
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <Border />
    </div>
  );
};

export default Header;
