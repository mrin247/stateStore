import axios from "../utils/axios";
import { porductConstants } from "./constants";

export const createProduct = (product) => {
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: porductConstants.CREATE_REQUEST });
      res = await axios.post("/store/product/create-product", product);
      if (res.status === 200) {
        dispatch({
          type: porductConstants.CREATE_SUCCESS,
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: porductConstants.CREATE_FAILURE,
          payload: { error: error },
        });
      }
    } catch (error) {
      dispatch({
        type: porductConstants.CREATE_FAILURE,
        payload: { error: error },
      });
    }
  };
};

export const allProduct = () => {
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: porductConstants.ALL_PRODUCT_REQUEST });
      res = await axios.get("/store/product");
      if (res.status === 200) {
        dispatch({
          type: porductConstants.ALL_PRODUCT_SUCCESS,
          payload: { products: res.data.products },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: porductConstants.ALL_PRODUCT_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: porductConstants.ALL_PRODUCT_FAILURE,
        payload: { error },
      });
    }
  };
};
