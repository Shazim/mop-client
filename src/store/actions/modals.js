import { push } from 'redux-first-history';
import * as types from './actionTypes';

export const LoginModal = (payload) => {
  return (dispatch) => {
    dispatch({
      type: types.LOGIN_MODAL,
      payload,
    });
  };
};

export const SignupModal = (payload) => {
  return {
    type: types.SIGNUP_MODAL,
    payload,
  };
};

export const ForgotModal = (payload) => {
  return (dispatch) => {
    dispatch({
      type: types.FORGOT_MODAL,
      payload,
    });
  };
};

export const logoutUser = (payload) => {
  return (dispatch) => {
    dispatch({
      type: types.LOGOUT_USER,
      payload,
    });
  };
};