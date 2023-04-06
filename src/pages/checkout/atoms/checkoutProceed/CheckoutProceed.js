import React from "react";
import styles from "./checkoutProceed.module.css";
import PropTypes from "prop-types";
import { getCartCount } from "../../../../helpers/getCartCount";
import { DEFAULT_OBJECT } from "../../../../constants/constants.general";

function CheckoutProceed(props) {
  let { cartOriginal, cartDiscount, cartItems } = props;
  let cartCount = getCartCount(cartItems);
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.itemsTotal}>{cartCount} items</div>
          <li>
            <span className={styles.discountedPrice}>₹{cartDiscount}</span>
            <span className={styles.originalPrice}>₹{cartOriginal}</span>
          </li>
        </div>
        <div className={styles.right}>
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
  cartItems: DEFAULT_OBJECT,
};

export default CheckoutProceed;
