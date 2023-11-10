import React from 'react';
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
