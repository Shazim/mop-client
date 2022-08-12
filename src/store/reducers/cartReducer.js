import { TOTAL_PRICE } from 'store/actions/actionTypes';

export const cartReducerInititalState = {
  totalPrice: 0,
};

const cartReducer = (state = cartReducerInititalState, action) => {
  const { type, payload, error } = action || {};
  switch (type) {
    case TOTAL_PRICE:
      return { ...state, totalPrice: payload };
    default:
      return state;
  }
};

export default cartReducer;
