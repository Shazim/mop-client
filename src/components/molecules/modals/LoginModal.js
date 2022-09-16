// ====================== IMPORTED LIBRARIES ========================
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { generateSchema } from 'validation';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

// ====================== IMPORTED COMPONENTS ========================
import { Form } from 'components/app/forms';
import Button from 'components/atoms/buttons/Button';
import SubmitButton from 'components/atoms/buttons/SubmitButton';
import TextField from 'components/atoms/form/TextField';

// ====================== IMPORTED UTILS ========================
import { signIn } from 'api';
import { setCookie } from 'cookies/Cookies';
import { routes } from 'routes';
import {
  FORGOT_MODAL,
  LOGIN_MODAL,
  SIGNUP_MODAL,
} from 'store/actions/actionTypes';
import Pinterest from 'assets/images/svgs/Pinterest';

const LoginModal = () => {
  const { isLoginOpen, isSignupOpen, isForgotOpen } = useSelector(
    (state) => state.modals
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location || {};

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.charCode === 13) {
        document.getElementById('login-button').click();
      }
    };
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, []);

  const handleSignupToggle = () => {
    handleLoginToggle();
    dispatch({ type: SIGNUP_MODAL, payload: !isSignupOpen });
  };

  const handleForgotToggle = () => {
    handleLoginToggle();
    dispatch({ type: FORGOT_MODAL, payload: !isForgotOpen });
  };
  const handleLoginToggle = () => {
    dispatch({ type: LOGIN_MODAL, payload: !isLoginOpen });
  };

  const login = (values) => {
    const route =
      pathname === routes.ROUTE_CHECKOUT
        ? routes.ROUTE_CHECKOUT
        : routes.ROUTE_MY_PROFILE;
    setIsLoading(true);
    signIn({ ...values, grant_type: 'password' })
      .then((response) => {
        setIsLoading(false);
        if (response?.status == 200) {
          setCookie('user', JSON.stringify(response?.data));
          handleLoginToggle();
          history.push(route);
        } else toast.error(response?.data?.title);
      })
      .catch((error) => toast.error(error));
  };

  const scrollOff = () => {
    isLoginOpen
      ? (window.document.body.style.overflow = 'hidden')
      : (window.document.body.style.overflow = 'scroll');
  };

  useEffect(() => {
    scrollOff();
  }, [isLoginOpen]);

  return (
    <div className={`w-100% h-100% `}>
      <Modal
        isOpen={isLoginOpen}
        className="absolute border-0   top-50% left-50% transform-xy outline-none sm:w-full"
        onRequestClose={handleLoginToggle}
        overlayClassName="fixed inset-0 overflow-auto bg-white bg-opacity-90 top-68"
      >
        <div className="bg-gray-lighter w-568 pl-56 pr-57 py-40 sm:w-full sm:pl-30 sm:pr-30 sm:pt-130">
          <div className="flex justify-between ">
            <div className="font-avenir-reg text-2xl text-secondary tracking-wider leading-38 uppercase">
              login
            </div>
            <div onClick={handleLoginToggle}>
              <img src="images/icons/close.svg" className="link" />
            </div>{' '}
          </div>
          <Button
            color="facebook"
            className="w-455 h-42 font-bold text-white tracking text-sm mt-20 sm:w-full"
          >
            LOGIN WITH FACEBOOK
          </Button>
          <Button
            color="instagram"
            className="w-455 h-42 tracking font-bold text-white text-sm  mt-20 sm:w-full"
          >
            LOGIN WITH INSTAGRAM
          </Button>
          <Button className="w-455 h-42 tracking text-sm mt-20 sm:w-full">
            LOGIN WITH PINTEREST
          </Button>

          <div className="w-100% flex items-center justify-between mt-24">
            <div className="w-100% border-b border-border opacity-1"></div>
            <div className="font-bold text-sm text-secondary tracking uppercase mx-10">
              or
            </div>
            <div className="w-100% border-b border-border opacity-1"></div>
          </div>
          {isLoading ? (
            <div className="w-100% flex items-center justify-center bg-gray-lighter">
              <TailSpin
                color="#C71118"
                height={80}
                width={80}
                ariaLabel="loading"
              />
            </div>
          ) : (
            <div className="mt-12">
              <Form
                onSubmit={login}
                initialValues={{ email: '', password: '' }}
                validationSchema={generateSchema({ email: '', password: '' })}
                autoComplete="off"
              >
                {() => (
                  <>
                    <TextField
                      name="email"
                      type="email"
                      placeholder="ENTER EMAIL HERE"
                      mb="6"
                      label="Email Address"
                      className="h-38 mb-10"
                    />
                    <TextField
                      type="password"
                      name="password"
                      placeholder="ENTER PASSWORD HERE"
                      mb="6"
                      label="password"
                      className="h-38 mb-10 sm:w-full"
                    />

                    <SubmitButton
                      className="w-134 h-41 flex tracking text-sm justify-center items-center mx-auto mt-16"
                      id="login-button"
                    >
                      LOGIN
                    </SubmitButton>
                  </>
                )}
              </Form>
            </div>
          )}
          <div className=" sm:w-full  flex justify-between pr-20 mt-34">
            <div
              onClick={handleSignupToggle}
              className="font-bold text-primary text-sm uppercase tracking leading-32 underline link"
            >
              sign up
            </div>
            <div
              onClick={handleForgotToggle}
              className="font-bold text-primary text-sm uppercase tracking leading-32 underline link sm:leading-20 "
            >
              forgot password
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;
