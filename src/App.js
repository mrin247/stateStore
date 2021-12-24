import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signin } from "./containers/signin";
import { Signup } from "./containers/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin/>} />
      </Routes>
    </Router>
  );
}

export default App;
