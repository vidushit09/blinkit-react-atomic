import React from "react";
import styles from "./checkoutSubHeader.module.css";
import PropTypes from "prop-types";
import { getCartCount } from "../../../../helpers/getCartCount";

function CheckoutSubHeader(props) {
  let { cartItems } = props;
  return (
    <>
      <div className={styles.deliveryTime}>Delivery in 10 minutes</div>
      <div className={styles.itemsCount}>{getCartCount(cartItems)} items</div>
    </>
  );
}

CheckoutSubHeader.propTypes = {
  cartItems: PropTypes.object,
};
CheckoutSubHeader.defaultProps = {
  cartItems: {},
};



export default CheckoutSubHeader;
