import * as types from 'store/actions/actionTypes';
import initialState from './initialState';

const publicReducer = (state = initialState.public, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case types.SIDEBAR_SEARCH: {
      return { ...state, searchSideBar: payload };
    }
    default:
      return state;
  }
};

export default publicReducer;
