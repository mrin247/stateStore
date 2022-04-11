/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */

import { orderConstants } from "../actions/constants";

const initState = {
  order: null,
  orders: [],
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  console.log(action.type);
  switch (action.type) {
    case orderConstants.GET_ORDER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case orderConstants.GET_ORDER_SUCCESS:
      state = {
        ...state,
        loading: false,
        orders: action.payload.orders,
      };
      break;
    case orderConstants.GET_ORDER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;

    case orderConstants.UPDATE_ORDER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case orderConstants.UPDATE_ORDER_SUCCESS:
      state = {
        ...state,
        loading: false,
        order: action.payload.order,
      };
      break;
    case orderConstants.UPDATE_ORDER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};
