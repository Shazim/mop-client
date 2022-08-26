import * as types from 'store/actions/actionTypes';
import initialState from './initialState';

const modalsReducer = (state = initialState, action) => {
    const { type, payload } = action || {};
    switch (type) {
        case types.LOGIN_MODAL: {
            return { ...state, isLoginOpen: payload };
        }
        case types.SIGNUP_MODAL: {
            return { ...state, isSignupOpen: payload };
        }
        case types.FORGOT_MODAL: {
            return { ...state, isForgotOpen: payload };
        }
        default:
            return state;
    }
};


export default modalsReducer;
