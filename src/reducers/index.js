import authReducer from "./authReducer";
import productReducer from "./productReducer";
import orderReducers from "./orderReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  orders: orderReducers,
});

export default rootReducer;
