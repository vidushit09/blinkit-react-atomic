import React from "react";
import TopNavbar from "../../organisms/topNavbar";
import CategoriesNavbar from "../../molecules/categoriesNavbar";
import CheckoutHeader from "./atoms/checkoutHeader";
import CheckoutSubHeader from "./atoms/checkoutSubHeader";
import CheckoutItems from "./organisms/checkoutItems";
import CheckoutFooter from "./molecules/checkoutFooter";
import AdvertisementContainer from "../../molecules/advertisementContainer";
import Disclaimer from "../../atoms/disclaimer";
import Footer from "../../organisms/footer";
import PropTypes from "prop-types";
import "./checkout.css";
import { connect } from "react-redux";


function Checkout(props) {
  const {
    cartItems
  } = props;
  return (
    <>
      <TopNavbar cartItems={cartItems}/> 
      <CategoriesNavbar/>
      <div className="checkout">
        <CheckoutHeader />
        <CheckoutSubHeader cartItems={cartItems}/>
        <CheckoutItems/> 
        <CheckoutFooter cartItems={cartItems}/> 
      </div>
      <AdvertisementContainer />
      <Disclaimer />
      <Footer />
    </>
  );
}

Checkout.propTypes = {
  cartItems: PropTypes.object,
  cartCount: PropTypes.number
};
Checkout.defaultProps = {
  cartItems: {},
  cartCount: 0
};


const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
    cartCount: state.cart.cartCount
  };
};

export default connect(mapStateToProps)(Checkout);
