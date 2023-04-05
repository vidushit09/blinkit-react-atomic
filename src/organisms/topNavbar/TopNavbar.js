import React from "react";
import Logo from "./atoms/logo";
import DeliveryDetails from "./atoms/deliveryDetails";
import Login from "./atoms/login";
import MyCart from "./atoms/myCart";
import PropTypes from "prop-types";
import "./topNavbar.css";
import { connect } from "react-redux";

function TopNavbar(props) {
  let { cartItems} = props;
  return (
    <div className="navbar display-flex">
      <div className="navbar__left display-flex">
        <Logo />
        <DeliveryDetails />
      </div>
      <div className="navbar__right">
        <Login />
        <MyCart cartItems={cartItems}/>
      </div>
    </div>
  );
}
TopNavbar.propTypes = {
  cartItems: PropTypes.object
};
TopNavbar.defaultProps={
  cartItems: {}
}

export default TopNavbar;
