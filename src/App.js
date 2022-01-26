import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Customers } from "./containers/customers";
import { Dashboard } from "./containers/dashboard";
import { Orders } from "./containers/orders";
import { Products } from "./containers/products";
import { Signin } from "./containers/signin";
import { Signup } from "./containers/signup";
import PrivateRoute from "./components/HOC/privateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions/authActions";
import { ForgotPassword } from "./containers/forgotPassword";
import { ResetPassword } from "./containers/resetPassword";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Dashboard />} />
          </Route>
          <Route exact path="/products" element={<PrivateRoute />}>
            <Route exact path="/products" element={<Products />} />
          </Route>
          <Route exact path="/customers" element={<PrivateRoute />}>
            <Route exact path="/customers" element={<Customers />} />
          </Route>
          <Route exact path="/orders" element={<PrivateRoute />}>
            <Route exact path="/orders" element={<Orders />} />
          </Route>

          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
