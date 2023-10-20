import React from 'react';
import Link from 'next/link';
import Logo from '../../UI/Logo';
import SearchBar from '../../actions/SearchBar';
import { navLinks } from '@/lib/static/links';
import Border from '../Border';
import NavMenu from './NavMenu';

const Header: React.FC = () => {
  return (
    <div>
      <NavMenu />
      <Border />
    </div>
  );
};

export default Header;
