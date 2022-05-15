import { signIn } from 'api';
import { Form } from 'components/app/forms';
import Button from 'components/atoms/buttons/Button';
import SubmitButton from 'components/atoms/buttons/SubmitButton';
import TextField from 'components/atoms/form/TextField';
import { setCookie } from 'cookies/Cookies';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import { generateSchema } from 'validation';
import { routes } from 'routes';

function LoginModal({ isOpen, openHandler, signUpHandler, forgotHandler }) {
  const history = useHistory();
  const closeModal = () => {
    openHandler((prv) => !prv);
  };

  const signUpModal = () => {
    openHandler((prv) => !prv);
    signUpHandler((prv) => !prv);
  };

  const forgotModal = () => {
    openHandler((prv) => !prv);
    forgotHandler((prv) => !prv);
  };

  const login = (values) => {
    signIn({ ...values, grant_type: 'password' })
      .then((response) => {
        if (response?.status == 200) {
          setCookie('user', JSON.stringify(response?.data));
          closeModal();
          history.push(routes.ROUTE_MY_PROFILE);
        }
      })
      .catch((error) => console.log('ERROR ', error));
  };

  return (
    <div
      className={`w-100% h-100% ${
        isOpen ? 'absolute top-0 bg-white bg-opacity-70' : ''
      } `}
    >
      <Modal
        isOpen={isOpen}
        className="absolute border-0 top-50% left-50% transform-xy outline-none"
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 overflow-auto"
      >
        <div className="bg-gray-lighter w-568 pl-56 pr-57 py-40">
          <div className="font-avenir-reg text-2xl text-secondary tracking-wider leading-38 uppercase">
            login
          </div>
          <Button
            color="facebook"
            className="w-455 h-42 font-bold text-white tracking text-sm mt-20"
          >
            LOGIN WITH FACEBOOK
          </Button>
          <Button
            color="instagram"
            className="w-455 h-42 tracking font-bold text-white text-sm  mt-20"
          >
            LOGIN WITH INSTAGRAM
          </Button>
          <Button className="w-455 h-42 tracking text-sm mt-20">
            LOGIN WITH PINTEREST
          </Button>

          <div className="w-100% flex items-center justify-between mt-24">
            <div className="w-100% border-b border-border opacity-1"></div>
            <div className="font-bold text-sm text-secondary tracking uppercase mx-10">
              or
            </div>
            <div className="w-100% border-b border-border opacity-1"></div>
          </div>
          <div className="mt-12">
            <Form
              onSubmit={login}
              initialValues={{ email: '', password: '' }}
              validationSchema={generateSchema({ email: '', password: '' })}
            >
              {() => (
                <>
                  <TextField
                    name="email"
                    placeholder="Enter email here"
                    mb="6"
                    label="Email Address"
                  />
                  <TextField
                    type="password"
                    name="password"
                    placeholder="Enter password here"
                    mb="6"
                    label="password"
                  />
                  <SubmitButton className="w-134 h-41 flex tracking text-sm justify-center items-center mx-auto mt-27">
                    LOGIN
                  </SubmitButton>
                </>
              )}
            </Form>
          </div>
          <div className="flex justify-between pr-20 mt-34">
            <div
              onClick={signUpModal}
              className="font-bold text-primary text-sm uppercase tracking leading-32 underline link"
            >
              sign up
            </div>
            <div
              onClick={forgotModal}
              className="font-bold text-primary text-sm uppercase tracking leading-32 underline link"
            >
              forgot password
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default LoginModal;
