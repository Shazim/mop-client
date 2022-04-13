import * as types from 'store/actions/actionTypes';
import initialState from './initialState';

const adminReducer = (state = initialState.admin, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case types.BACK_BUTTON: {
      return { ...state, backButton: payload };
    }
    default:
      return state;
  }
};

export default adminReducer;
