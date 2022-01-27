/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { porductConstants } from "../actions/constants";

const initState = {
  products: [],
  error: "",
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
  }
  return state;
};
