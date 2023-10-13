'use client';
import React, { useEffect } from 'react';
import logo from '@/public/assets/images/fbg-logo.webp';
import Link from 'next/link';
import Image from 'next/image';
import { PiPaintBrushHouseholdBold } from 'react-icons/pi';
import { themeChange } from 'theme-change';



const Header: React.FC = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div className='navbar bg-base-100 h-32 px-12 text-primary'>
      <div className='flex-1 align-center'>
        <Link href='/'>
          <Image src={logo} alt='Full Blast Gear Logo' height={76} />
        </Link>
      </div>
      
      <div className='flex-none gap-4'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Search'
            className='input input-bordered border-secondary w-24 md:w-auto'
          />
        </div>
        <ul className='menu menu-horizontal px-1 gap-4'>
          <li>
            <details className='align-center'>
              <summary className='text-secondary normal-case text-3xl after:hidden'>
                <PiPaintBrushHouseholdBold />
              </summary>
              <ul className='p-2 bg-base-100 right-0 top-10 w-32 z-10'>
                <li className='text-secondary normal-case text-lg'>
                  <button data-set-theme="theme1" data-act-class="theme1">Theme 1</button>
                </li>
                <li className='text-secondary normal-case text-lg'>
                  <button data-set-theme="theme2" data-act-class="theme2">Theme 2</button>
                </li>
                <li className='text-secondary normal-case text-lg'>
                  <button data-set-theme="theme3" data-act-class="theme3">Theme 3</button>
                </li>
                <li className='text-secondary normal-case text-lg'>
                  <button data-set-theme="theme4" data-act-class="theme4">Theme 4</button>
                </li>
                <li className='text-secondary normal-case text-lg'>
                  <button data-set-theme="theme5" data-act-class="theme5">Theme 5</button>
                </li>
                <li className='text-secondary normal-case text-lg'>
                  <button data-set-theme="dark" data-act-class="dark">Dark</button>
                </li>
              </ul>
            </details>
          </li>
          <li className='w-32'>
            <details>
              <summary className='text-secondary normal-case text-xl'>
                Menu
              </summary>
              <ul className='p-2 bg-base-100 right-0 top-10 w-32 z-10'>
                <li>
                  <Link href='/' className='text-secondary normal-case text-xl'>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href='/' className='text-secondary normal-case text-xl'>
                    About
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
