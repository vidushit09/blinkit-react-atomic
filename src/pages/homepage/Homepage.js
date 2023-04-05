import React from "react";
import data from "../../data/data.json";
import TopNavbar from "../../organisms/topNavbar";
import CategoriesNavbar from "../../molecules/categoriesNavbar";
import ProductsContainer from "./organisms/productsContainer";
import AdvertisementContainer from "../../molecules/advertisementContainer";
import Disclaimer from "../../atoms/disclaimer";
import Footer from "../../organisms/footer";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Homepage(props) {
  const {
    cartItems,
    count
  } = props;
  return (
    <>
      <TopNavbar cartItems={cartItems} count={count}/>
      <CategoriesNavbar/>
      <ProductsContainer/>
      <AdvertisementContainer />
      <Disclaimer />
      <Footer />
    </>
  );
}

Homepage.propTypes = {
  category: PropTypes.string,
  currSubCategory: PropTypes.string,
  cartCount: PropTypes.number,
  cartDiscount: PropTypes.number,
};
Homepage.defaultProps = {
  category: undefined,
  currSubCategory: undefined,
  cartCount: 0,
  cartDiscount: 0,
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
    count:state.cart.count
  };
};

export default connect(mapStateToProps)(Homepage);
