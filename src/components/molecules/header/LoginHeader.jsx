import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from 'components/atoms/searchbar/SearchBar';

function LoginHeader() {
  return (
    <div className="py-32 flex justify-between max-screen">
      <div className="w-30%">
        <Link to={'/'}>
          <img
            src="/images/Logo/logo.svg"
            alt=""
            className="mr-25 w-132 h-32"
          />
        </Link>
      </div>
      <div className="flex w-70% md:w-80% justify-between">
        {/* <div> */}
        <SearchBar
          className="flex items-center"
          placeholder="Search For An Artist"
          bgColor="bg-transparent"
        />
        {/* </div> */}
        <div
          className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking`}
        >
          my gallery
        </div>
        <div
          className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking`}
        >
          store
        </div>
        <div
          className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking`}
        >
          get started
        </div>
        <Link to="/my-profile">
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
