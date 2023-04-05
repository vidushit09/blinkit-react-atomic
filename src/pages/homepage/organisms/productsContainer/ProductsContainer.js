import React from "react";
import { getSubCategory } from "../../../../helpers/getSubCategory";
import { getItems } from "../../helpers/getItems";
import SubCategory from "../../molecules/subCategory";
import SubCategoryItemsContainer from "../../molecules/subCategoryItemsContainer";
import "./productsContainer.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ProductsContainer(props) {
  const {
    products
  } = props;
  return (
    <div className="products-container">
      <SubCategory/>
      <SubCategoryItemsContainer
        products={products}
      />
    </div>
  );
}

ProductsContainer.propTypes = {
  category: PropTypes.string,
  currSubCategory: PropTypes.string,
};
ProductsContainer.defaultProps = {
  category: undefined,
  currSubCategory: undefined,
};

const mapStateToProps = (state) => {
  return {
    products: state.product.products
  };
};
export default connect(mapStateToProps)(ProductsContainer)

