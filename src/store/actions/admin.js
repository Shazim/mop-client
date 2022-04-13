import * as types from './actionTypes';

export const adminSideBarBack = (payload) => {
  return (dispatch) => {
    dispatch({
      type: types.BACK_BUTTON,
      payload,
    });
  };
};
