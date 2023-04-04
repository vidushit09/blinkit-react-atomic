import React from "react";
import data from "../../data/data.json";
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

function Checkout(props) {
  const {
    cartItems,
    categoryClick,
    addProduct,
    deleteProduct,
  } = props;
  return (
    <>
      <TopNavbar cartItems={cartItems}/> 
      <CategoriesNavbar
        categories={data.topTabCategoryList}
        categoryClick={categoryClick}
      />
      <div className="checkout">
        <CheckoutHeader />
        <CheckoutSubHeader cartItems={cartItems} />
        <CheckoutItems cartItems={cartItems} addProduct={addProduct} deleteProduct={deleteProduct} />
        <CheckoutFooter
          cartItems={cartItems}
        /> 
      </div>
      <AdvertisementContainer />
      <Disclaimer />
      <Footer />
    </>
  );
}

Checkout.propTypes = {
  cartOriginal: PropTypes.number,
  cartDiscount: PropTypes.number,
  cartCount: PropTypes.number,
};
Checkout.defaultProps = {
  cartOriginal: 0,
  cartDiscount: 0,
  cartCount: 0,
};

export default Checkout;
