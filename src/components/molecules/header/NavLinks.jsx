import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import SearchBar from 'components/atoms/searchbar/SearchBar';

const NavLinks = () => {
  return (
    <>
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
        <div className="w-70% md:w-80% flex justify-between block sm:hidden">
          {/* <div> */}
          <SearchBar
            className="flex items-center sm:mt-30 "
            placeholder="Search Artist"
            bgColor="bg-transparent"
          />
          {/* </div> */}
          <Link to={routes.ROUTE_GALLERY_SETTING}>
            <div
              className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking sm:mt-30 `}
            >
              my gallery
            </div>
          </Link>
          <Link to={routes.ROUTE_STORE}>
            <div
              className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking sm:mt-30 `}
            >
              store
            </div>
          </Link>
          <div
            className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking sm:mt-30`}
          >
            get started
          </div>
          <Link to={routes.ROUTE_MY_PROFILE}>
            <div
              className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking  sm:mt-30`}
            >
              profile
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavLinks;
