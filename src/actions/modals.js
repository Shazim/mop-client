import { push } from 'redux-first-history';
import * as types from './actionTypes';

export const signupModal = (payload, nextPage) => {
  return (dispatch) => {
    dispatch({
      type: types.SIGNUP_MODAL,
      payload,
    });
  };
};

export const signinModal = (payload) => {
  return {
    type: types.SIGNUP_MODAL,
    payload,
  };
};

export const LoginModal = (payload) => {
  return (dispatch) => {
    dispatch({
      type: types.LOGIN_MODAL,
      payload,
    });
  };
};
