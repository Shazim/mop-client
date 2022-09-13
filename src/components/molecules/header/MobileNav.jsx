// ====================== IMPORTED LIBRARIES ========================
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
// ====================== IMPORTED COMPONENTS ========================
import SearchBar from 'components/atoms/searchbar/SearchBar';
import { slide as Menu } from 'react-burger-menu';
import { getCookie } from 'cookies/Cookies';
import useUserLogout from 'hooks/useUserLogout';

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const user = getCookie('user') && JSON.parse(getCookie('user'));
  const { user_type, stripe_id } = user?.user || {};
  const handleLogout = useUserLogout();
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
        <Menu
          right
          width={'100%'}
          customBurgerIcon={
            <img
              src={window.location.origin + '/images/icons/menu.svg'}
              className="hidden sm:block"
            />
          }
          onClick={() => setOpen(!open)}
          customCrossIcon={
            <img
              src={window.location.origin + '/images/icons/close.svg'}
              className="hidden sm:block"
            />
          }
          className="top-0"
        >
          <div className=" hidden sm:flex  sm:flex-col sm:bg-gray-lighter sm:w-100% sm:h-100% pl-30 ">
            {/* <div> */}
            <div className="flex justify-center pt-50">
              <SearchBar
                className="flex items-center  sm:pl-30 "
                placeholder="Search Artist"
                bgColor="bg-transparent"
              />
            </div>
            <Link
              to={
                user_type === 'customer'
                  ? routes.ROUTE_CUSTOMER_ACCOUNT
                  : routes.ROUTE_MY_PROFILE
              }
            >
              <div
                className={`font-bold mt-30 ${'text-primary'} text-lg uppercase hover:text-primary link tracking   flex justify-center`}
              >
                {'Howdy, ' + user?.first_name + '!'}
              </div>
            </Link>
            {/* </div> */}
            <Link to={user_type !== 'customer' && routes.ROUTE_STOCKROOM}>
              <div
                className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking  flex justify-center `}
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
                className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking sm:mt-30 flex justify-center `}
              >
                {user_type === 'customer' ? 'galleries' : 'exhibition'}
              </div>
            </Link>
            {user_type === 'customer' && (
              <Link to={routes.ROUTE_BROWSE_ARTWORK}>
                <div
                  className={`font-bold mt-6 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking sm:mt-30 flex justify-center `}
                >
                  browse artwork
                </div>
              </Link>
            )}
            <Link
              to={
                user_type === 'customer'
                  ? routes.ROUTE_CUSTOMER_ACCOUNT
                  : routes.ROUTE_MY_PROFILE
              }
            >
              <div
                className={`font-bold mt-30 ${'text-secondary'} text-sm uppercase hover:text-primary link tracking   flex justify-center`}
              >
                My Profile
              </div>
            </Link>
            {!stripe_id && (
              <div
                className={`font-bold mt-6 text-primary text-sm uppercase  link tracking flex justify-center sm:mt-30`}
                onClick={handleLogout}
              >
                Logout
              </div>
            )}
          </div>
        </Menu>
      </div>
    </>
  );
};

export default MobileNav;
