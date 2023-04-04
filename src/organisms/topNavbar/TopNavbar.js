import React from "react";
import Logo from "../../atoms/logo";
import DeliveryDetails from "../../atoms/deliveryDetails";
import Login from "../../atoms/login";
import MyCart from "../../atoms/myCart";
import PropTypes from "prop-types";
import "./topNavbar.css";

function TopNavbar(props) {
  const { cartCount, cartDiscount } = props;
  return (
    <div className="navbar display-flex">
      <div className="navbar__left display-flex">
        <Logo />
        <DeliveryDetails />
      </div>
      <div className="navbar__right">
        <Login />
        <MyCart cartCount={cartCount} cartDiscount={cartDiscount} />
      </div>
    </div>
  );
}
TopNavbar.propTypes = {
  cartCount: PropTypes.number,
  cartDiscount: PropTypes.number,
};
TopNavbar.defaultProps={
  cartCount:0,
  cartDiscount:0
}

export default TopNavbar;
