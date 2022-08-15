import { signUp } from 'api';
import { Form } from 'components/app/forms';
import Button from 'components/atoms/buttons/Button';
import SubmitButton from 'components/atoms/buttons/SubmitButton';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import TextField from 'components/atoms/form/TextField';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { generateSchema } from 'validation';

function SignupModal({ isOpen, openHandler, signInHandler, forgotHandler }) {
  const [customer, setCustomer] = useState(true);
  const [artist, setArtist] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (values) => {
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
          closeModal();
          setError('');
        } else if (response.status == 422) {
          setError('email ' + response?.data?.error?.detail?.email);
        }
      })
      .catch((error) => console.log('ERROR ', error));
  };
  function closeModal() {
    openHandler((prv) => !prv);
  }

  const signInModal = () => {
    openHandler((prv) => !prv);
    signInHandler((prv) => !prv);
  };

  const forgotModal = () => {
    openHandler((prv) => !prv);
    forgotHandler((prv) => !prv);
  };

  const tabHandler = () => {
    setArtist(!artist);
    setCustomer(!customer);
  };

  return (
    <div
      className={`w-100% h-100% ${
        isOpen ? 'absolute top-0 bg-white bg-opacity-70' : ''
      } `}
    >
      <Modal
        isOpen={isOpen}
        className="top-50% left-50% right-auto bottom-auto transform-xy mr-50% absolute vh-96 border-0"
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 overflow-auto"
      >
        <div className="bg-gray-lighter w-568 pl-56 pr-57 py-40">
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
                <div className="flex justify-between">
                  <div className="font-avenir-reg text-2xl text-secondary tracking-wider leading-38 uppercase">
                    Sign Up
                  </div>
                  <div onClick={closeModal}>
                    <img src="images/icons/close.svg" className="link" />
                  </div>{' '}
                </div>
                <Button
                  color="facebook"
                  className="w-455 h-42 tracking font-bold text-white text-sm mt-20"
                >
                  LOGIN WITH FACEBOOK
                </Button>
                <Button
                  color="instagram"
                  className="w-455 h-42 tracking font-bold text-white text-sm  mt-20"
                >
                  LOGIN WITH INSTAGRAM
                </Button>
                <Button className="w-455 h-42 tracking font-bold text-sm mt-20">
                  LOGIN WITH PINTEREST
                </Button>

                <div className="font-bold text-black tracking leading-32 uppercase text-sm mt-20">
                  Choose the statement that best applies to you.
                </div>
                <div className="flex justify-between mt-20">
                  <div
                    onClick={tabHandler}
                    className={`w-48% link uppercase px-65 py-22 ${
                      customer
                        ? 'bg-primary text-white'
                        : 'bg-white text-secondary'
                    } text-sm  text-center tracking`}
                  >
                    customer account
                  </div>
                  <div
                    onClick={tabHandler}
                    className={`w-48% link uppercase px-65 py-22 ${
                      artist
                        ? 'bg-primary text-white'
                        : 'bg-white text-secondary'
                    } text-sm  text-center tracking`}
                  >
                    artist account
                  </div>
                </div>

                <div className="w-100% flex items-center justify-between mt-24">
                  <div className="w-100% border-b border-border opacity-1"></div>
                  <div className="font-bold text-sm mx-10 text-secondary tracking uppercase">
                    or
                  </div>
                  <div className="w-100% border-b border-border opacity-1"></div>
                </div>

                <div className="w-455 border-b border-border opacity-1 pb-33 pt-10 mb-33">
                  <TextField
                    name="email"
                    type="email"
                    placeholder="Enter email here"
                    mb="6"
                    height="38"
                    label="Email Address"
                  />
                  <div className="font-avenir-reg text-base text-primary">
                    {error}
                  </div>
                  <TextField
                    name="password"
                    placeholder="enter password here"
                    type="password"
                    mb="6"
                    height="38"
                    label="password"
                  />
                  <TextField
                    name="confirm"
                    placeholder="confirm password here"
                    mb="6"
                    type="password"
                    height="38"
                    label="confirm password"
                  />
                </div>
                <div className="w-100% border-b border-border opacity-1 pb-30 mb-20">
                  {customer ? (
                    <div className="font-reg text-black text-base mt-20">
                      I want to be able to browse and buy artists work, but am
                      not interested in selling my own art.{' '}
                    </div>
                  ) : (
                    <div className="font-reg text-black text-base mt-20">
                      I want to be able to create my own gallery and sell my own
                      art to a range of customers, as well as browse and buy
                      work.{' '}
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
                <div className="flex justify-between pr-20 mt-14">
                  <div
                    onClick={signInModal}
                    className="font-bold text-primary text-sm uppercase tracking leading-32 link underline"
                  >
                    login
                  </div>
                  <div
                    onClick={forgotModal}
                    className="font-bold text-primary text-sm uppercase tracking leading-32 link underline"
                  >
                    forgot password
                  </div>
                </div>
              </>
            )}
          </Form>
        </div>
      </Modal>
    </div>
  );
}

export default SignupModal;
