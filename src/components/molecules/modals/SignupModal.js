// ====================== IMPORTED LIBRARIES ========================
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { generateSchema } from 'validation';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

// ====================== IMPORTED COMPONENTS ========================
import SubmitButton from 'components/atoms/buttons/SubmitButton';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import TextField from 'components/atoms/form/TextField';
import Button from 'components/atoms/buttons/Button';
import { Form } from 'components/app/forms';
import Facebook from 'assets/images/svgs/Facebook';
import Instagram from 'assets/images/svgs/Instagram';
import Twitter from 'assets/images/svgs/Twitter';
import Youtube from 'assets/images/svgs/Youtube';
import Pinterest from 'assets/images/svgs/Pinterest';
// ====================== IMPORTED UTILD ========================
import { signUp } from 'api';
import {
  FORGOT_MODAL,
  LOGIN_MODAL,
  SIGNUP_MODAL,
} from 'store/actions/actionTypes';

const SignupModal = () => {
  const { isLoginOpen, isSignupOpen, isForgotOpen } = useSelector(
    (state) => state.modals
  );
  const dispatch = useDispatch();

  const [customer, setCustomer] = useState(true);
  const [artist, setArtist] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values) => {
    setIsLoading(true);
    const data = {
      user: {
        email: values.email,
        password: values.password,
        password_confirmation: values.confirm,
        user_type: artist ? 'artist' : 'customer',
      },
      confirm_url: window.location.origin,
    };

    signUp(data)
      .then((response) => {
        if (response.status == 200) {
          toast.success('Registration successful. Login to continue!');
          handleLoginToggle();
          setError('');
          setIsLoading(false);
        } else if (response.status == 422) {
          toast.error('Registration failed.');
          setError('email ' + response?.data?.error?.detail?.email);
          setIsLoading(false);
        }
      })
      .catch((error) => setIsLoading(false));
  };

  const handleLoginToggle = () => {
    handleSignupToggle();
    dispatch({ type: LOGIN_MODAL, payload: !isLoginOpen });
  };

  const handleForgotToggle = () => {
    handleSignupToggle();
    dispatch({ type: FORGOT_MODAL, payload: !isForgotOpen });
  };

  const handleSignupToggle = () => {
    dispatch({ type: SIGNUP_MODAL, payload: !isSignupOpen });
  };

  const tabHandler = () => {
    setArtist(!artist);
    setCustomer(!customer);
  };

  const scrollOff = () => {
    isSignupOpen
      ? (window.document.body.style.overflow = 'hidden')
      : (window.document.body.style.overflow = 'scroll');
  };

  useEffect(() => {
    scrollOff();
  }, [isSignupOpen]);

  return (
    <div className={`w-100% h-100% `}>
      <Modal
        isOpen={isSignupOpen}
        className="top-50% left-50% right-auto bottom-auto transform-xy mr-50% absolute h-90% border-0 sm:w-full"
        onRequestClose={handleSignupToggle}
        overlayClassName="fixed inset-0 overflow-auto bg-white bg-opacity-90 top-68"
      >
        {isLoading ? (
          <div className="bg-gray-lighter w-568 pl-56 pr-57 py-40 flex items-center justify-center ">
            <TailSpin
              color="#C71118"
              height={80}
              width={80}
              ariaLabel="loading"
            />
          </div>
        ) : (
          <div className="bg-gray-lighter w-568 pl-56 pr-57 py-40 sm:w-full">
            <Form
              onSubmit={handleSubmit}
              initialValues={{ email: '', password: '', confirm: '' }}
              validationSchema={generateSchema({
                email: '',
                password: '',
                confirm: '',
              })}
            >
              {() => (
                <>
                  <div className="flex justify-between ">
                    <div className="font-avenir-reg text-2xl text-secondary tracking-wider leading-38 uppercase">
                      Sign Up
                    </div>
                    <div onClick={handleSignupToggle}>
                      <img src="images/icons/close.svg" className="link" />
                    </div>{' '}
                  </div>
                  <Button
                    color="facebook"
                    className="w-455 h-42 tracking font-bold text-white text-sm mt-20 sm:w-full"
                  >
                    LOGIN WITH FACEBOOK
                  </Button>
                  <Button
                    color="instagram"
                    className="w-455 h-42 tracking font-bold text-white text-sm  mt-20   sm:w-full"
                  >
                    LOGIN WITH INSTAGRAM
                  </Button>
                  <Button className="w-455 h-42 tracking font-bold text-sm mt-20 sm:w-full">
                    LOGIN WITH PINTEREST
                  </Button>

                  <div className="w-100% flex items-center justify-between mt-24 sm:w-full">
                    <div className="w-100% border-b border-border opacity-1 sm:w-full"></div>
                    <div className="font-bold text-sm mx-10 text-secondary tracking uppercase">
                      or
                    </div>
                    <div className="w-100% border-b border-border opacity-1 sm:w-full"></div>
                  </div>

                  <div className="w-455 border-b border-border opacity-1 pb-33 pt-10 my-33 sm:w-full">
                    <TextField
                      name="email"
                      type="email"
                      placeholder="ENTER EMAIL HERE"
                      mb="6"
                      label="Email Address"
                      className="h-38 mb-10"
                    />
                    <div className="font-avenir-reg text-base text-primary">
                      {error}
                    </div>
                    <TextField
                      name="password"
                      placeholder="ENTER PASSWORD HERE"
                      type="password"
                      mb="6"
                      className="h-38 mb-10"
                      label="password"
                    />
                    <TextField
                      name="confirm"
                      placeholder="ENTER CONFIRM PASSWORD HERE"
                      mb="6"
                      type="password"
                      className="h-38"
                      label="confirm password"
                    />
                  </div>
                  <div className="font-bold text-black tracking leading-32 uppercase text-sm ">
                    Choose the statement that best applies to you.
                  </div>
                  <div className="flex justify-between mt-20 ">
                    <div
                      onClick={tabHandler}
                      className={`w-48% link uppercase px-65 py-14 ${
                        customer
                          ? 'bg-primary text-white'
                          : 'bg-white text-secondary'
                      } text-sm  text-center tracking  sm:px-25`}
                    >
                      customer account
                    </div>
                    <div
                      onClick={tabHandler}
                      className={`w-48% link uppercase px-65 py-14 ${
                        artist
                          ? 'bg-primary text-white'
                          : 'bg-white text-secondary'
                      } text-sm  text-center tracking sm:px-25`}
                    >
                      artist account
                    </div>
                  </div>
                  <div className="w-100% border-b border-border opacity-1 pb-30 mb-20 sm:w-full">
                    {customer ? (
                      <div className="font-reg text-black text-base mt-20">
                        I want to be able to browse and buy artists work, but am
                        not interested in selling my own art.{' '}
                      </div>
                    ) : (
                      <div className="font-reg text-black text-base mt-20">
                        I want to be able to create my own gallery and sell my
                        own art to a range of customers, as well as browse and
                        buy work.{' '}
                      </div>
                    )}
                  </div>
                  <CheckBox
                    className="w-full text-11"
                    value="I would like to receive insightful updates and emails. "
                  />

                  <SubmitButton className="w-134 h-41 flex tracking font-bold text-sm justify-center items-center mx-auto mt-12">
                    SIGN UP
                  </SubmitButton>
                  <div className="flex justify-between pr-20 mt-14 ">
                    <div
                      onClick={handleLoginToggle}
                      className="font-bold text-primary text-sm uppercase tracking leading-32 link underline"
                    >
                      login
                    </div>
                    <div
                      onClick={handleForgotToggle}
                      className="font-bold text-primary text-sm uppercase tracking leading-32 link underline"
                    >
                      forgot password
                    </div>
                  </div>
                </>
              )}
            </Form>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SignupModal;
