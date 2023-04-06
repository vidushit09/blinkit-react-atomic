import React from "react";
import styles from "./deliveryDetails.module.css";

function DeliveryDetails() {
  return (
    <div className={styles.deliveryDetails}>
      <div className={styles.deliveryTime}>Delivery in 10 minutes</div>
      <div className={styles.location}>
        Delhi, India <i className="fa fa-caret-down"></i>
      </div>
    </div>
  );
}

export default DeliveryDetails;
