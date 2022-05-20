import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from 'components/atoms/searchbar/SearchBar';
import { routes } from 'routes';

function LoginHeader() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="py-32 flex justify-between max-screen  sm:w-full sm:relative">
      <div className="w-30% ">
        <Link to={routes.ROUTE_HOME}>
          <img
            src="/images/Logo/logo.svg"
            alt=""
            className="mr-25 w-132 h-32"
          />
        </Link>
      </div>
      <div
        className="hidden sm:block absolute right-43 link space-y-2 "
        onClick={() => setOpen(!open)}
      >
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
      </div>
      <div
        className={
          open
            ? ' overflow-hidden h-0 '
            : ' w-70% md:w-80% flex justify-between sm:flex-col sm:w-100%  sm:mt-40 sm:text-center  '
        }
      >
        {/* <div> */}
        <SearchBar
          className="flex items-center"
          placeholder="Search Artist"
          bgColor="bg-transparent"
        />
        {/* </div> */}
        <Link to={routes.ROUTE_GALLERY_SETTING}>
          <div
            className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking`}
          >
            my gallery
          </div>
        </Link>
        <Link to={routes.ROUTE_STORE}>
          <div
            className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking`}
          >
            store
          </div>
        </Link>
        <div
          className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking`}
        >
          get started
        </div>
        <Link to={routes.ROUTE_MY_PROFILE}>
          <div
            className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking`}
          >
            profile
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LoginHeader;
