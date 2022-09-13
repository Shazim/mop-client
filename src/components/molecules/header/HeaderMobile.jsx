import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { routes } from 'routes';
import { useDispatch, useSelector } from 'react-redux';

// ====================== IMPORTED COMPONENTS ========================
import SearchBar from 'components/atoms/searchbar/SearchBar';
import { slide as Menu } from 'react-burger-menu';
import { getCookie } from 'cookies/Cookies';
import { LOGIN_MODAL } from 'store/actions/actionTypes';
import Button from 'components/atoms/buttons/Button';
import { ReactComponent as Cart } from '../../../assets/images/cartIcon.svg';
import LoginHeader from './LoginHeader';

const HeaderMobile = () => {
  const [open, setOpen] = useState(false);
  const { isLoginOpen } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location || {};
  const history = useHistory();

  const [value, setValue] = useState('');

  const tabs = [
    { title: 'about', link: routes.ROUTE_ABOUT },
    { title: 'galleries', link: routes.ROUTE_GALLERY },
    { title: 'browse artwork', link: routes.ROUTE_BROWSE_ARTWORK },
  ];

  const { access_token, refresh_token } =
    (getCookie('user') && JSON.parse(getCookie('user'))) || {};

  const activeRoute = () => {
    if (['/galleries', '/exhibitions', '/artists'].includes(pathname))
      return 'text-primary';
  };

  const handleLoginToggle = () => {
    dispatch({ type: LOGIN_MODAL, payload: !isLoginOpen });
  };

  return (
    <>
      {!access_token ? (
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
            <div className=" hidden sm:flex  sm:flex-col sm:bg-gray-lighter sm:w-100% sm:h-100% ">
              {/* <div> */}
              <div className="flex pt-50 pl-30">
                <div className="flex-grow">
                  <Button
                    onClick={() => history.push(routes.ROUTE_CREATE_GALLERY)}
                    className="w-87 h-33 "
                  >
                    Create
                  </Button>
                </div>
                <div
                  onClick={handleLoginToggle}
                  className="text-secondary-black font-reg text-base link pr-30 "
                >
                  Sign in
                </div>
                <Cart
                  className="w-20 h-18 link mr-30 "
                  onClick={() => history.push(routes.ROUTE_CHECKOUT)}
                />
              </div>
              <div className="flex justify-center pt-20">
                <SearchBar
                  className="flex items-center  sm:pl-30 "
                  placeholder="Search Artist"
                  bgColor="bg-transparent"
                />
              </div>
              {tabs.map((item, i) =>
                item.title === 'galleries' ? (
                  <div
                    className={`font-bold mt-6  ${activeRoute()} text-sm text-secondary uppercase hover:text-primary link tracking flex justify-center `}
                  >
                    <Link to={`${item.link}`}>{item.title}</Link>
                  </div>
                ) : (
                  <div
                    className={`font-bold mt-6  flex justify-center ${
                      location.pathname == item.link
                        ? 'text-primary'
                        : 'text-secondary'
                    } text-sm uppercase hover:text-primary link tracking`}
                  >
                    <Link to={`${item.link}`}>{item.title}</Link>
                  </div>
                )
              )}
            </div>
          </Menu>
        </div>
      ) : (
        <LoginHeader />
      )}
    </>
  );
};

export default HeaderMobile;
