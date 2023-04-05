import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { cartInner } from "./helpers/cartInner";
import { connect } from "react-redux";


import "./myCart.css";

function MyCart(props) {
  let { cartItems, count } = props;
  console.log(cartItems);
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
  cartCount: PropTypes.number,
  cartDiscount: PropTypes.number,
};
MyCart.defaultProps = {
  cartCount: 0,
  cartDiscount: 0,
};

// const mapStateToProps = (state) => {
//   console.log(state.cart.cartItems);
//   return {
//     cartItems: state.cart.cartItems
//   };
// };

export default MyCart
