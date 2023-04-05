import React from "react";
import "./checkoutProceed.css";
import PropTypes from "prop-types";
import { getCartCount } from "../../../../helpers/getCartCount";

function CheckoutProceed(props) {
  let { cartOriginal, cartDiscount, cartItems } = props;
  let cartCount = getCartCount(cartItems);
  return (
    <div className="checkout-proceed-outer">
      <div className="checkout-proceed-inner">
        <div className="checkout-proceed__left">
          <div className="items-total">{cartCount} items</div>
          <li>
            <span className="discounted-price">₹{cartDiscount}</span>
            <span className="original-price">₹{cartOriginal}</span>
          </li>
        </div>
        <div className="checkout-proceed__right">
          PROCEED <i className="fa fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
}
CheckoutProceed.propTypes = {
  cartOriginal: PropTypes.number,
  cartDiscount: PropTypes.number,
  cartItems: PropTypes.object,
};
CheckoutProceed.defaultProps = {
  cartOriginal: 0,
  cartDiscount: 0,
  cartItems: {},
};

export default CheckoutProceed;
