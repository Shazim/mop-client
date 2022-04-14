import Button from 'components/atoms/buttons/Button';
import SearchBar from 'components/atoms/searchbar/SearchBar';
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import LoginModal from 'components/molecules/modals/LoginModal';
import SignupModal from 'components/molecules/modals/SignupModal';
import ForgotPassword from 'components/molecules/modals/ForgotPassword';
import { ReactComponent as Cart } from '../../../assets/images/cartIcon.svg';
import LoginHeader from './LoginHeader';
import { getCookie } from 'cookies/Cookies';

function Header({ login = false, signUpHandler, signInHandler, menu, isOpen }) {
  const [active, setActive] = useState(0);
  const [signIn, setSignIn] = useState();
  const [forgot, setForgot] = useState();
  const [signUp, setSignUp] = useState();

  useEffect(() => {
    if (!signIn) {
      const login = new URLSearchParams(search).get('login');
      login && setSignIn((prv) => !prv);
    }
    scrollOff();
  }, [signUp, signIn, forgot]);

  const tabs = [
    { title: 'about', link: '/about' },
    { title: 'galleries', link: '/gallery' },
    { title: 'browse artwork', link: '/browse-artwork' },
  ];

  const loginTabs = ['my gallery', 'store', 'get started', 'profile'];
  const location = useLocation();
  const history = useHistory();
  const scrollOff = () => {
    signUp || signIn || forgot
      ? (window.document.body.style.overflow = 'hidden')
      : (window.document.body.style.overflow = 'scroll');
  };
  const search = useLocation().search;

  const { access_token, refresh_token } =
    (getCookie('user') && JSON.parse(getCookie('user'))) || {};

  return (
    <>
      <LoginModal
        isOpen={signIn}
        openHandler={setSignIn}
        signUpHandler={setSignUp}
        forgotHandler={setForgot}
      />
      <SignupModal
        isOpen={signUp}
        openHandler={setSignUp}
        signInHandler={setSignIn}
        forgotHandler={setForgot}
      />
      <ForgotPassword
        isOpen={forgot}
        openHandler={setForgot}
        signInHandler={setSignIn}
        signUpHandler={setSignUp}
      />
      {!access_token ? (
        <div className="max-screen lg:px-60 md:px-50 py-32 sm:px-23">
          <div className="flex justify-between">
            <div className="flex justify-between w-50% xl:w-57% lg:w-57% md:w-57% items-center sm:w-100%">
              <Link to={'/'}>
                <img
                  src="/images/Logo/logo.svg"
                  alt=""
                  className="mr-25 w-132 h-32"
                />
              </Link>
              <div className="hidden sm:block">
                {menu ? (
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
                )}
              </div>
              <div className="flex w-65% justify-between sm:hidden">
                {tabs.map((item, i) => (
                  <div
                    className={`font-bold mt-6 ${
                      location.pathname == item.link
                        ? 'text-primary'
                        : 'text-secondary'
                    } text-sm uppercase hover:text-primary link tracking`}
                  >
                    <Link to={`${item.link}`}>{item.title}</Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between w-33% xl:w-42% md:w-42% sm:hidden">
              <SearchBar
                className="w-243 h-32 w-36%"
                placeholder="Search Artist"
                bgColor="bg-transparent"
              />
              <Button
                onClick={() => history.push('/create-gallery')}
                className="w-87 h-33 "
              >
                Create
              </Button>
              <div
                onClick={() => setSignIn((prv) => !prv)}
                className="text-secondary-black font-reg text-base link"
              >
                Sign in
              </div>
              <Cart className="w-20 h-18" />
            </div>
          </div>
        </div>
      ) : (
        <LoginHeader />
      )}
    </>
  );
}

export default Header;
