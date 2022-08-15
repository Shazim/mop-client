//Action Types
import { TOTAL_PRICE } from './actionTypes';

// All Actions
export const cartAction = (payload, nextPage) => {
  return (dispatch) => {
    dispatch({
      type: TOTAL_PRICE,
      payload,
    });
  };
};

// // Action Dispatch Functions
const totalPrice = (payload) => (dispatch) => {
  new Promise((resolve) => {
    dispatch(cartAction(payload));
    resolve('Total Price added successfully');
  });
};
