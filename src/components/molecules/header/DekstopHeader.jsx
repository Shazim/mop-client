// ====================== IMPORTED LIBRARIES ========================
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// ====================== IMPORTED components ========================
import Button from 'components/atoms/buttons/Button';
import SearchBar from 'components/atoms/searchbar/SearchBar';
import { ReactComponent as Cart } from '../../../assets/images/cartIcon.svg';
import LoginHeader from './LoginHeader';

// ====================== IMPORTED UTILS ========================
import { getCookie } from 'cookies/Cookies';
import { routes } from 'routes';
import { getSearchArtists } from 'api';
import { useLazyFetch } from 'hooks';
import { LOGIN_MODAL } from 'store/actions/actionTypes';

const DekstopHeader = ({ login = false, menu, isOpen }) => {
  const { isLoginOpen } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location || {};
  const history = useHistory();

  const [value, setValue] = useState('');

  const [handleGetSearch, { data: dataSearch }] =
    useLazyFetch(getSearchArtists);

  const artists = dataSearch?.artists || [];

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
        <div className={`max-screen lg:px-60 md:px-50 py-32 sm:px-23 `}>
          <div className="flex justify-between">
            <div className="flex justify-between w-50% xl:w-57% lg:w-57% md:w-57% items-center sm:w-100%">
              <Link to={routes.ROUTE_HOME}>
                <img
                  src="/images/Logo/logo.svg"
                  alt=""
                  className="mr-25 w-132 h-32"
                />
              </Link>
              <div className="hidden sm:block">
                {/* {menu ? (
                  <img
                    className={`w-20`}
                    src="/images/header/cross.svg"
                    onClick={() => isOpen(!menu)}
                  />
                ) : (
                  <img
                    className={`w-27`}
                    src="/images/header/muneIcon.svg"
                    onClick={() => isOpen(!menu)}
                  />
                )} */}
              </div>

              <div className="flex w-65% justify-between sm:hidden">
                {tabs.map((item, i) =>
                  item.title === 'galleries' ? (
                    <div
                      className={`font-bold mt-6  ${activeRoute()} text-sm text-secondary uppercase hover:text-primary link tracking`}
                    >
                      <Link to={`${item.link}`}>{item.title}</Link>
                    </div>
                  ) : (
                    <div
                      className={`font-bold mt-6   ${
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
            </div>
            <div className="flex items-center justify-between w-33% xl:w-42% lg:w-40% md:w-43% sm:hidden">
              <div className="relative">
                <SearchBar
                  className="w-243 h-32 w-100%"
                  placeholder="Search Artist"
                  bgColor="bg-transparent"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    handleGetSearch({
                      variables: `?q[artist_name_cont]=${e.target.value}`,
                    });
                  }}
                />
                {artists.length !== 0 && value != '' && (
                  <div className="absolute z-10 w-210  flex ">
                    <div className="rounded items-center w-full bg-white border border-solid border-gray p-10">
                      {artists.map(({ artist_name, image }) => (
                        <div className="flex w-full pb-4 mb-7 rounded items-center border border-solid border-gray">
                          <img
                            className="mt-4 ml-10 w-24 h-24 rounded-50%"
                            src={image}
                            alt=""
                          />
                          <div className="ml-7 flex items-center text-base font-nunito-bold">
                            {artist_name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Button
                onClick={() => history.push(routes.ROUTE_CREATE_GALLERY)}
                className="w-87 h-33 "
              >
                Create
              </Button>
              <div
                onClick={handleLoginToggle}
                className="text-secondary-black font-reg text-base link"
              >
                Sign in
              </div>
              <Cart
                className="w-20 h-18 link"
                onClick={() => history.push(routes.ROUTE_CHECKOUT)}
              />
            </div>
          </div>
        </div>
      ) : (
        <LoginHeader />
      )}
    </>
  );
};

export default DekstopHeader;
