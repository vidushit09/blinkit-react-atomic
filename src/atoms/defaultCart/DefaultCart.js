import React from "react";
import { Link } from "react-router-dom";
import "./defaultCart.css";
function DefaultCart() {
  return (
    <Link to="/checkout">
      <button className="navbar__mycart">
        <i className="fa fa-shopping-cart"></i>
        <div className="my-cart">My Cart</div>
        <div className="my-cart-text"></div>
      </button>
    </Link>
  );
}

export default DefaultCart;
