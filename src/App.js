import React from "react";
import "./App.module.css";
import { Route, Routes } from "react-router";
import Homepage from "./pages/homepage";
import Checkout from "./pages/checkout";
var _ = require("lodash");

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    );
  }
}

export default App;
