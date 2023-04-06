import React from "react";
import TopNavbar from "../../organisms/topNavbar";
import CategoriesNavbar from "../../molecules/categoriesNavbar";
import ProductsContainer from "./organisms/productsContainer";
import AdvertisementContainer from "../../molecules/advertisementContainer";
import Disclaimer from "../../atoms/disclaimer";
import Footer from "../../organisms/footer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DEFAULT_OBJECT } from "../../constants/constants.general";

function Homepage(props) {
  const { cartItems } = props;
  return (
    <>
      <TopNavbar cartItems={cartItems} />
      <CategoriesNavbar />
      <ProductsContainer />
      <AdvertisementContainer />
      <Disclaimer />
      <Footer />
    </>
  );
}

Homepage.propTypes = {
  cartItems: PropTypes.object,
  cartCount: PropTypes.number,
};
Homepage.defaultProps = {
  cartItems: DEFAULT_OBJECT,
  cartCount: 0,
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
    cartCount: state.cart.cartCount,
  };
};

export default connect(mapStateToProps)(Homepage);
