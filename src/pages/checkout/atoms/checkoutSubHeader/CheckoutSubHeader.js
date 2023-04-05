import React from "react";
import "./checkoutSubHeader.css";
import PropTypes from "prop-types";
import { getCartCount } from "../../../../helpers/getCartCount";

function CheckoutSubHeader(props) {
  let { cartItems } = props;
  return (
    <>
      <div className="delivery-time">Delivery in 10 minutes</div>
      <div className="items-count">{getCartCount(cartItems)} items</div>
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
