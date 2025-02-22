// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
import { Link } from 'react-router-dom';

// ====================== IMPORTED COMPONENTS ========================
import SearchBar from 'components/atoms/searchbar/SearchBar';
import { getCookie } from 'cookies/Cookies';
import { useDispatch, useSelector } from 'react-redux';

// ====================== IMPORTED UTILS ===========================
import { routes } from 'routes';
import useUserLogout from 'hooks/useUserLogout';
import { CHECK_MODEL } from 'store/actions/actionTypes';

const NavLinks = () => {
  const { isCheck } = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: CHECK_MODEL, payload: !isCheck });
  };

  const user = getCookie('user') && JSON.parse(getCookie('user'));
  const { user_type, stripe_id } = user?.user || {};

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
      <div className="w-70% md:w-80% flex justify-between block sm:hidden">
        {/* <div> */}
        <SearchBar
          className="flex items-center sm:mt-30 "
          placeholder="Search Artist"
          bgColor="bg-transparent"
        />
        {/* </div> */}
        <Link to={user_type !== 'customer' && routes.ROUTE_STOCKROOM}>
          <div
            className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking sm:mt-30 `}
          >
            {user_type !== 'customer' && 'stockroom'}
          </div>
        </Link>
        <Link
          to={
            user_type === 'customer'
              ? routes.ROUTE_GALLERY
              : `${routes.ROUTE_EXHIBITION_ROOM}/live`
          }
        >
          <div
            className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking sm:mt-30 `}
          >
            {user_type === 'customer' ? 'galleries' : 'exhibition'}
          </div>
        </Link>
        {user_type === 'customer' && (
          <Link to={routes.ROUTE_BROWSE_ARTWORK}>
            <div
              className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking sm:mt-30 `}
            >
              browse artwork
            </div>
          </Link>
        )}
        <Link
          to={
            user_type === 'customer'
              ? routes.ROUTE_CUSTOMER_PROFILE
              : routes.ROUTE_ARTIST_PROFILE
          }
        >
          <div
            className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking  sm:mt-30`}
          >
            {user.first_name ? `Howdy ${user.first_name}` : 'Profile'}
          </div>
        </Link>
        {!stripe_id && user_type === 'artist' && (
          <div
            className={`font-bold mt-6 text-primary text-sm uppercase  link tracking  sm:mt-30`}
            onClick={handleLogout}
          >
            Logout
          </div>
        )}
      </div>
    </div>
  );
};

export default NavLinks;
