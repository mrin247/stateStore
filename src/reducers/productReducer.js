/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { porductConstants } from "../actions/constants";

const initState = {
  products: [],
  error: "",
  loading: false,
};

export default (state = initState, action) => {
  console.log(action.type);
  switch (action.type) {
    case porductConstants.CREATE_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;

    case porductConstants.ALL_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case porductConstants.ALL_PRODUCT_SUCCESS:
      state = {
        ...state,
        products: action.payload.products,
        loading: false,
      };
      break;
    case porductConstants.ALL_PRODUCT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
  }
  return state;
};
