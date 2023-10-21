'use client';

import { navLinks } from '@/lib/static/links';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SearchBar from '../../actions/SearchBar';
import Logo from '../../UI/Logo';
import { NavIconProps, NavLinkProps } from '@/@types/props';
import {
  IoBag,
  IoBagOutline,
  IoCall,
  IoCallOutline,
  IoMenuSharp,
  IoPerson,
  IoPersonOutline
} from 'react-icons/io5';
import { usePathname } from 'next/navigation';

const NavMenu: React.FC = () => {
  const handleCallClick = () => {
    window.open('tel:+18003189030', '_blank');
  };

  return (
    <div className='navbar flex bg-base-100 h-20 md:h-32 px-4 md:px-12 text-primary z-[15]'>
      <div className='flex align-center min-w-[12rem]'>
        <Logo />
      </div>
      <div className='flex flex-col-reverse sm:flex-col w-full md:gap-4'>
        <div className='flex w-full justify-between items-center'>
          <div />
          <SearchBar variant='header' />
          <div
            className='gap-4 w-48 text-xl font-bold justify-end items-center cursor-pointer hidden lg:flex'
            onClick={handleCallClick}
          >
            <IoCall className='text-green-500' />
            <p>800-318-9030</p>
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div />
          <ul className='menu menu-horizontal bg-base-100 hidden lg:inline-flex gap-0 xl:gap-4 justify-end md:justify-between py-0 px-0 -mr-4'>
            {navLinks.map((link) => (
              <NavLink key={link.slug} link={link} />
            ))}
          </ul>
          <div className='flex gap-4 text-2xl text-primary w-24 sm:w-48 justify-end items-center'>
            <NavIcon
              variants={[IoCallOutline, IoCall]}
              href='tel:+18003189030'
              styles='block lg:hidden'
            />
            <NavIcon
              variants={[IoPersonOutline, IoPerson]}
              href='/account'
              styles='hidden lg:block'
            />
            <NavIcon variants={[IoBagOutline, IoBag]} />
            <div className='drawer lg:hidden z-40 justify-end w-fit'>
              <input
                id='nav-drawer'
                type='checkbox'
                className='drawer-toggle'
              />
              <div className='drawer-content items-center flex'>
                <label
                  htmlFor='nav-drawer'
                  className='drawer-button btn bg-base-100 border-none min-h-0 h-6 px-0'
                >
                  <IoMenuSharp className='text-lg sm:text-2xl' />
                </label>
              </div>
              <div className='drawer-side'>
                <label
                  htmlFor='nav-drawer'
                  aria-label='close sidebar'
                  className='drawer-overlay'
                ></label>
                <ul className='menu p-4 w-80 gap-4 min-h-full bg-base-200 text-base-content'>
                  <SearchBar variant='drawer' />
                  {navLinks.map((link) => (
                    <NavLink key={link.slug} link={link} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (pathname === link.slug) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [pathname, link.slug])
  return (
    <li
      key={link.name}
      className={`uppercase text-lg xl:text-xl font-semibold px-0 py-0 ${isActive ? 'text-secondary' : 'text-primary'}`}
    >
      <Link
        prefetch
        href={link.slug}
        className='py-0 hover:bg-transparent hover:text-secondary focus:!text-secondary active:!text-secondary focus:!bg-transparent active:!bg-transparent'
      >
        {link.name}
      </Link>
    </li>
  );
};

const NavIcon: React.FC<NavIconProps> = ({ variants, href, styles }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [Outline, Filled] = variants;

  return (
    <Link
      href={href ?? ''}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={styles}
    >
      {isHovered ? <Filled className='text-secondary' /> : <Outline />}
    </Link>
  );
};

export default NavMenu;
