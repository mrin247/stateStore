import axios from "../utils/axios";
import { porductConstants } from "./constants";

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

export const createProduct = (product) => {
  console.log(product);
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: porductConstants.CREATE_REQUEST });
      res = await axios.post("/store/product/create-product", product);
      if (res.status === 200) {
        dispatch({
          type: porductConstants.CREATE_SUCCESS,
        });
        dispatch(allProduct());
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

export const productDetail = (productId) => {
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: porductConstants.PRODUCT_DETAIL_REQUEST });
      res = await axios.get(`/product/${productId}`);
      if (res.status === 200) {
        dispatch({
          type: porductConstants.PRODUCT_DETAIL_SUCCESS,
          payload: { product: res.data.product },
        });
      } else {
        console.log(res);
        const { error } = res.data;
        dispatch({
          type: porductConstants.PRODUCT_DETAIL_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: porductConstants.PRODUCT_DETAIL_FAILURE,
        payload: { error },
      });
    }
  };
};

export const updateProduct = (product,productId) => {
  //console.log(product);
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: porductConstants.UPDATE_PRODUCT_REQUEST });
      res = await axios.post(`store/product/${productId}`, product);
      if (res.status === 200) {
        dispatch({
          type: porductConstants.UPDATE_PRODUCT_SUCCESS,
          payload: res.data.product,
        });
        dispatch(allProduct());
      } else {
        const { error } = res.data;
        dispatch({
          type: porductConstants.UPDATE_PRODUCT_FAILURE,
          payload: { error: error },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: porductConstants.UPDATE_PRODUCT_FAILURE,
        payload: { error: error },
      });
    }
  };
};

export const deleteProduct = (productId) => {
  //console.log(product);
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: porductConstants.DELETE_PRODUCT_REQUEST });
      res = await axios.delete(`store/product/${productId}`);
      if (res.status === 200) {
        dispatch({
          type: porductConstants.DELETE_PRODUCT_SUCCESS,
        });
        dispatch(allProduct());
      } else {
        const { error } = res.data;
        dispatch({
          type: porductConstants.DELETE_PRODUCT_FAILURE,
          payload: { error: error },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: porductConstants.UPDATE_PRODUCT_FAILURE,
        payload: { error: error },
      });
    }
  };
};
