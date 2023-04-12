import React from "react";
import styles from "./checkoutItems.module.css";
import { connect } from "react-redux";
import { checkoutItemsHelper } from "../../helpers/checkoutItemsHelper";

function CheckoutItems(props) {
  const { cartItems } = props;
  let products = checkoutItemsHelper(cartItems);

  return <ul className={styles.list}>{products}</ul>;
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(CheckoutItems);
