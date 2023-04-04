import React from "react";
import data from "../../data/data.json";
import TopNavbar from "../../organisms/topNavbar";
import CategoriesNavbar from "../../molecules/categoriesNavbar";
import ProductsContainer from "./organisms/productsContainer";
import AdvertisementContainer from "../../molecules/advertisementContainer";
import Disclaimer from "../../atoms/disclaimer";
import Footer from "../../organisms/footer";
import PropTypes from "prop-types";

function Homepage(props) {
  const {
    category,
    currSubCategory,
    cartItems,
    categoryClick,
    subCategoryOnClick,
    addProduct,
    deleteProduct,
  } = props;
  return (
    <>
      <TopNavbar cartItems={cartItems} />
      <CategoriesNavbar
        categories={data.topTabCategoryList}
        categoryClick={categoryClick}
      />
      <ProductsContainer
        category={category}
        cartItems={cartItems}
        currSubCategory={currSubCategory}
        subCategoryOnClick={subCategoryOnClick}
        addProduct={addProduct}
        deleteProduct={deleteProduct}
      />
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

export default Homepage;
