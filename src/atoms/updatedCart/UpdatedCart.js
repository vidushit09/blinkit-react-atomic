import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./updatedCart.css";

function UpdatedCart(props) {
  const { cartCount, cartDiscount } = props;
  return (
    <Link to="/checkout">
      <button className="navbar__mycart--updated">
        <i className="fa fa-shopping-cart"></i>
        <div
          className="my-cart-text"
          style={{ display: cartCount == 0 ? "none" : "block" }}
        >
          <div>{cartCount} items</div>
          <div>₹ {cartDiscount}</div>
        </div>
      </button>
    </Link>
  );
}
UpdatedCart.propTypes={
  cartCount:PropTypes.number,
  cartDiscount:PropTypes.number
}
UpdatedCart.defaultProps={
  cartCount:0,
  cartDiscount:0
}


export default UpdatedCart;
