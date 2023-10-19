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
      <div className='navbar flex bg-base-300 h-20 md:h-32 px-4 md:px-12 text-primary z-[15]'>
        <div className='flex-1 align-center'>
          <Logo />
        </div>
        <div className='flex-none gap-2 md:gap-8'>
          <ThemeButton />
          <SearchBar />
          <ul className='menu hidden md:inline-flex menu-horizontal gap-4'>
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
                        className='text-white hover:text-white hover:text-opacity-75  normal-case text-xl'
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
          <div className='drawer md:hidden drawer-end z-40'>
            <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content'>
              <label
                htmlFor='my-drawer-4'
                className='drawer-button btn text-white bg-base-300 border-none'
              >
                Menu
              </label>
            </div>
            <div className='drawer-side'>
              <label
                htmlFor='my-drawer-4'
                aria-label='close sidebar'
                className='drawer-overlay'
              ></label>
              <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      prefetch
                      href={link.slug}
                      className='normal-case text-xl'
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Border />
    </div>
  );
};

export default Header;
