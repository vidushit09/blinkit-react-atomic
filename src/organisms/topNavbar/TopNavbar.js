import React from "react";
import Logo from "./atoms/logo";
import DeliveryDetails from "./atoms/deliveryDetails";
import Login from "./atoms/login";
import MyCart from "./atoms/myCart";
import PropTypes from "prop-types";
import styles from "./topNavbar.module.css";
import stylesCommon from "../../App.module.css";
import { DEFAULT_OBJECT } from "../../constants/constants.general";

function TopNavbar(props) {
  let { cartItems } = props;
  return (
    <div className={`${styles.navbar} ${stylesCommon.displayFlex}`}>
      <div className={stylesCommon.displayFlex}>
        <Logo />
        <DeliveryDetails />
      </div>
      <div>
        <Login />
        <MyCart cartItems={cartItems} />
      </div>
    </div>
  );
}
TopNavbar.propTypes = {
  cartItems: PropTypes.object,
};
TopNavbar.defaultProps = {
  cartItems: DEFAULT_OBJECT,
};

export default TopNavbar;
