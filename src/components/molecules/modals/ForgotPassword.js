// ====================== IMPORTED LIBRARIES ========================
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateSchema } from 'validation';
import Modal from 'react-modal';

// ====================== IMPORTED COMPONENTS ========================
import { Form } from 'components/app/forms';
import Button from 'components/atoms/buttons/Button';
import TextField from 'components/atoms/form/TextField';
import { FORGOT_MODAL, LOGIN_MODAL, SIGNUP_MODAL } from 'store/actions/actionTypes';

const ForgotPassword = () => {

  const { isLoginOpen, isSignupOpen, isForgotOpen } = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  const handleLoginToggle = () => {
    handleForgotToggle();
    dispatch({ type: LOGIN_MODAL, payload: !isLoginOpen });
  };

  const handleSignupToggle = () => {
    handleForgotToggle();
    dispatch({ type: SIGNUP_MODAL, payload: !isSignupOpen });
  };

  const handleForgotToggle = () => {
    dispatch({ type: FORGOT_MODAL, payload: !isForgotOpen });
  }

  const scrollOff = () => {
    isForgotOpen
      ? (window.document.body.style.overflow = 'hidden')
      : (window.document.body.style.overflow = 'scroll');
  };

  useEffect(() => {
    scrollOff()
  }, [isForgotOpen]);

  return (
    <div
      className={`w-100% h-100% `}
    >
      <Modal
        isOpen={isForgotOpen}
        onRequestClose={handleForgotToggle}
        className="absolute border-0 top-50% left-50% transform-xy"
        overlayClassName=" fixed inset-0 overflow-auto bg-white bg-opacity-90 top-68"
      >
        <div className="bg-gray-lighter w-568 pl-56 pr-57 py-40">
          <div className="font-avenir-reg text-2xl mb-15 text-secondary tracking-wider leading-38 uppercase">
            forgot password
          </div>
          <Form
            // onSubmit={handleSubmit}
            initialValues={{ email: '' }}
            validationSchema={generateSchema({ email: '' })}
          >
            {() => (
              <TextField
                name="email"
                type="email"
                placeholder="Enter email here"
                mb="6"
                height="38"
                label="Email Address"
              />
            )}
          </Form>
          <Button className="w-38% h-41 flex tracking text-sm justify-center items-center mx-auto mt-27">
            SEND RESET
          </Button>
          <div className="flex justify-between pr-20 mt-34">
            <div
              onClick={handleLoginToggle}
              className="font-bold text-primary text-sm uppercase tracking leading-32 underline link"
            >
              login
            </div>
            <div
              onClick={handleSignupToggle}
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
