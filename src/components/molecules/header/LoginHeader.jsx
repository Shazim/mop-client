import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import SearchBar from 'components/atoms/searchbar/SearchBar';

import { slide as Menu } from 'react-burger-menu';
import NavLinks from './NavLinks';
import MobileNav from './MobileNav';

function LoginHeader() {
  const [open, setOpen] = useState(false);
  console.log('here', open);
  return (
    <div className="py-32 flex justify-between max-screen  sm:w-full sm:relative">
      <div className="w-30% ">
        <Link to={routes.ROUTE_HOME}>
          <img
            src="/images/Logo/logo.svg"
            alt=""
            className="mr-25 w-onClick={() => setOpen(!open)}132 h-32"
          />
        </Link>
      </div>
      {/* <div
        className="hidden sm:block absolute right-10%  link"
        onClick={() => setOpen(!open)}
      >
        <img src="images/icons/menu.svg" alt="" />
      </div> */}

      <NavLinks />
      <Menu
        right
        width={'100%'}
        customBurgerIcon={
          <img src="images/icons/menu.svg" className="hidden sm:block" />
        }
        onClick={() => setOpen(!open)}
        customCrossIcon={<img src="images/icons/close.svg" />}
        className="top-0"
      >
        <MobileNav />
      </Menu>
      {/* <div className="hidden sm:block sm:flex flex-col">
        <Menu
          right
          width={'100%'}
          customBurgerIcon={<img src="images/icons/menu.svg" />}
          onClick={() => setOpen(!open)}
        >
          <NavLinks
            className={
              ''
            }
          />
        </Menu>
      </div> */}
    </div>
  );
}

export default LoginHeader;
