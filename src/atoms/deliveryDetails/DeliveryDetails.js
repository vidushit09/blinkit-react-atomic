import React from "react";
import "./deliveryDetails.css";

function DeliveryDetails() {
  return (
    <div className="navbar__delivery-details">
      <div className="navbar__delivery-time">Delivery in 10 minutes</div>
      <div className="navbar__location">
        Delhi, India <i className="fa fa-caret-down"></i>
      </div>
    </div>
  );
}

export default DeliveryDetails;
