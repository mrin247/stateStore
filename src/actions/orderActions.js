import axios from "../utils/axios";
import { orderConstants } from "./constants";

export const getOrders = () => {
  return async (dispatch) => {
    let res;
    try {
      dispatch({ type: orderConstants.GET_ORDER_REQUEST });
      res = await axios.get("/store/order/getorders");
      if (res.status === 200) {
        const orders = res.data;
        console.log(orders);
        dispatch({
          type: orderConstants.GET_ORDER_SUCCESS,
          payload: { orders: orders.orders },
        });
      } else {
        const { error } = res.data;
        console.log(error);
        dispatch({
          type: orderConstants.GET_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: orderConstants.GET_ORDER_FAILURE,
        payload: { error },
      });
    }
  };
};

export const updateOrder = (updatedOrder) => {
  return async (dispatch) => {
    let res;
    console.log("from action", updatedOrder);
    try {
      dispatch({ type: orderConstants.UPDATE_ORDER_REQUEST });
      res = await axios.post("/store/order/updateorder", updatedOrder);
      if (res.status === 200) {
        const order = res.data;
        console.log(order);
        dispatch({
          type: orderConstants.UPDATE_ORDER_SUCCESS,
          payload: { order: order },
        });
      } else {
        const { error } = res.data;
        console.log(error);
        dispatch({
          type: orderConstants.UPDATE_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: orderConstants.UPDATE_ORDER_FAILURE,
        payload: { error },
      });
    }
  };
};
