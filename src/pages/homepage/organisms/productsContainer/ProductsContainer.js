import React from "react";
import SubCategory from "../../molecules/subCategory";
import SubCategoryItemsContainer from "../../molecules/subCategoryItemsContainer";
import "./productsContainer.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ProductsContainer(props) {
  const { products } = props;
  return (
    <div className="products-container">
      <SubCategory />
      <SubCategoryItemsContainer products={products} />
    </div>
  );
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};
ProductsContainer.defaultProps = {
  products: [],
};

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
  };
};
export default connect(mapStateToProps)(ProductsContainer);
