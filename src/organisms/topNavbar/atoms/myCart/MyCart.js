import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { cartInner } from "./helpers/cartInner";
import styles from "./myCart.module.css";

function MyCart(props) {
  let { cartItems} = props;
  return (
    <>
      <Link to="/checkout">
        <button className={styles.mycart}>
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
