import { FormField } from 'components/app/forms';
import Button from 'components/atoms/buttons/Button';
import TextField from 'components/atoms/form/TextField';
import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';

function ForgotPassword({ isOpen, openHandler, signInHandler, signUpHandler }) {
  const closeModal = () => {
    openHandler((prv) => !prv);
  };

  const sinIn = () => {
    openHandler((prv) => !prv);
    signInHandler((prv) => !prv);
  };

  const signUp = () => {
    openHandler((prv) => !prv);
    signUpHandler((prv) => !prv);
  };

  return (
    <div
      className={`w-100% h-100% ${
        isOpen ? 'absolute top-0 bg-white bg-opacity-70' : ''
      } `}
    >
      <Modal
        isOpen={isOpen}
        className="absolute border-0 top-50% left-50% transform-xy"
        onRequestClose={closeModal}
      >
        <div className="bg-gray-lighter w-568 pl-56 pr-57 py-40">
          <div className="font-avenir-reg text-2xl mb-15 text-secondary tracking-wider leading-38 uppercase">
            forgot password
          </div>
          <TextField
            placeholder="Enter email here"
            mb="6"
            height="38"
            label="Email Address"
          />
          <Button className="w-38% h-41 flex tracking text-sm justify-center items-center mx-auto mt-27">
            SEND RESET
          </Button>
          <div className="flex justify-between pr-20 mt-34">
            <div
              onClick={sinIn}
              className="font-bold text-primary text-sm uppercase tracking leading-32 underline link"
            >
              login
            </div>
            <div
              onClick={signUp}
              className="font-bold text-primary text-sm uppercase tracking leading-32 underline link"
            >
              sign up
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ForgotPassword;
