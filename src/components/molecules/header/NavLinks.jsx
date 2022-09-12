// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// ====================== IMPORTED COMPONENTS ========================
import SearchBar from 'components/atoms/searchbar/SearchBar';
import { getCookie, removeCookie } from 'cookies/Cookies';

// ====================== IMPORTED UTILS ========================
import { LOGOUT_USER } from 'store/actions/actionTypes';
import { routes } from 'routes';

const NavLinks = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = getCookie('user') && JSON.parse(getCookie('user'));
  const { user_type, stripe_id } = user?.user || {};

  const handleLogout = () => {
    dispatch({ type: LOGOUT_USER, payload: true });
    setTimeout(() => {
      removeCookie('user');
      dispatch({ type: LOGOUT_USER, payload: false });
      history.push(routes.ROUTE_HOME);
    }, 3000)

  };
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
        <Link
          to={
            user_type === 'customer'
              ? routes.ROUTE_GALLERY
              : routes.ROUTE_STOCKROOM
          }
        >
          <div
            className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking sm:mt-30 `}
          >
            {user_type === 'customer' ? 'my gallery' : 'stockroom'}
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
        <Link to={routes.ROUTE_MY_PROFILE}>
          <div
            className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking  sm:mt-30`}
          >
            {'Howdy, ' + user?.first_name + '!'}
          </div>
        </Link>
        {!stripe_id && <div
          className={`font-bold mt-6 text-primary text-sm uppercase  link tracking  sm:mt-30`}
          onClick={handleLogout}
        >
          Logout
        </div>
        }
      </div>
    </div>
  );
};

export default NavLinks;
