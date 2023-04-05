import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { cartInner } from "./helpers/cartInner";
import { connect } from "react-redux";


import "./myCart.css";

function MyCart(props) {
  let { cartItems} = props;
  console.log(props);
  return (
    <>
      <Link to="/checkout">
        <button className="navbar__mycart">
          <i className="fa fa-shopping-cart"></i>
          {cartInner(cartItems)}
        </button>
      </Link>
    </>
  );
}

MyCart.propTypes = {
  cartItems: PropTypes.object
};
MyCart.defaultProps = {
  cartItems: {}
};



export default MyCart;
