import * as types from './actionTypes';

export const publicSideBarSearch = (payload) => {
  return (dispatch) => {
    dispatch({
      type: types.SIDEBAR_SEARCH,
      payload,
    });
  };
};
