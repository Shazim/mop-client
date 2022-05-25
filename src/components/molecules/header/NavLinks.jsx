import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import SearchBar from 'components/atoms/searchbar/SearchBar';

const NavLinks = () => {
  return (
    <>
      <div className="w-70% md:w-80% flex justify-between sm:hidden">
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
            className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking sm:mb-100% sm:mt-30`}
          >
            profile
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavLinks;
