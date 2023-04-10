import React from "react";
import CheckoutProceed from "../../atoms/checkoutProceed";
import styles from "./checkoutFooter.module.css";
import PropTypes from "prop-types";
import { getCartTotalDiscounted } from "../../../../helpers/getCartTotalDiscounted";
import { getCartTotal } from "../../../../helpers/getCartTotal";
import { DEFAULT_OBJECT } from "../../../../constants/general";

function CheckoutFooter(props) {
  const { cartItems } = props;
  let cartDiscount = getCartTotalDiscounted(cartItems);
  let cartOriginal = getCartTotal(cartItems);

  return (
    <div className={styles.footer}>
      <div className={styles.mrpDetails}>
        <div className={styles.mrpText}>MRP</div>
        <div className={styles.mrp}>₹{cartOriginal}</div>
      </div>
      <div className={styles.discountDetails}>
        <div className={styles.discountText}>Product discount</div>
        <div className={styles.discount}>
          -₹{(cartOriginal - cartDiscount).toFixed(2)}
        </div>
      </div>
      <div className={styles.deliveryDetails}>
        <div className={styles.deliveryText}>Delivery Charge</div>
        <div className={styles.deliveryCharge}>
          <div className={styles.striked}>₹15</div>
          <div className={styles.free}>FREE</div>
        </div>
      </div>
      <div className={styles.totalDetails}>
        <div className={styles.totalText}>Grand total</div>
        <div className={styles.total}>₹{cartDiscount}</div>
      </div>
      <div className={styles.couponsDisclaimer}>
        Coupons are only applicable on Blinkit app
      </div>
      <CheckoutProceed
        cartItems={cartItems}
        cartOriginal={cartOriginal}
        cartDiscount={cartDiscount}
      />
    </div>
  );
}

CheckoutFooter.propTypes = {
  cartItems: PropTypes.object,
};
CheckoutFooter.defaultProps = {
  cartItems: DEFAULT_OBJECT
};

export default CheckoutFooter;
