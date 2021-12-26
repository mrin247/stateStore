import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Customers } from "./containers/customers";
import { Dashboard } from "./containers/dashboard";
import { Orders } from "./containers/orders";
import { Products } from "./containers/products";
import { Signin } from "./containers/signin";
import { Signup } from "./containers/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/customers" element={<Customers />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/orders" element={<Orders />} />

        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
