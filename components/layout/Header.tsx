import React, { useEffect } from 'react';
import Link from 'next/link';
import { PiPaintBrushHouseholdBold } from 'react-icons/pi';
import { themeChange } from 'theme-change';
import Logo from '../UI/Logo';
import ThemeButton from '../actions/ThemeButton';
import SearchBar from '../actions/SearchBar';
import { themes } from '@/lib/static/themes';
import { navLinks } from '@/lib/static/links';

const Header: React.FC = () => {
  return (
    <div className='navbar bg-base-100 h-32 px-12 text-primary z-[15]'>
      <div className='flex-1 align-center'>
        <Logo />
      </div>
      <div className='flex-none gap-4'>
        <SearchBar />
        <ul className='menu menu-horizontal px-1 gap-4'>
          <li>
            <details className='align-center'>
              <summary className='text-secondary normal-case after:hidden gap-4'>
                <p className='text-xl'>[Dev]</p>
                <p className='text-3xl'>
                  <PiPaintBrushHouseholdBold />
                </p>
              </summary>
              <ul className='p-2 bg-base-100 right-0 top-10 w-32 z-[15]'>
                {themes.map((theme) => (
                  <li
                    key={theme.attributeName}
                    className='text-secondary normal-case text-lg'
                  >
                    <ThemeButton
                      attributes={{
                        'data-set-theme': theme.attributeName,
                        'data-act-class': theme.attributeName
                      }}
                      themeChoice={theme.uiName}
                    />
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li className='w-32'>
            <details>
              <summary className='text-secondary normal-case text-xl'>
                Menu
              </summary>
              <ul className='p-2 bg-base-100 right-0 top-10 w-32 z-[15]'>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.slug}
                      className='text-secondary normal-case text-xl'
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
  );
};

export default Header;
