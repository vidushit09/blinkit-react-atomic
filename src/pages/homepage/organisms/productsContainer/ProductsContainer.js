import React from "react";
import { getSubCategory } from "../../../../helpers/getSubCategory";
import { getItems } from "../../helpers/getItems";
import SubCategory from "../../molecules/subCategory";
import SubCategoryItemsContainer from "../../molecules/subCategoryItemsContainer";
import "./productsContainer.css";
import PropTypes from "prop-types";

function ProductsContainer(props) {
  const {
    category,
    cartItems,
    currSubCategory,
    subCategoryOnClick,
    addProduct,
    deleteProduct,
  } = props;
  return (
    <div className="products-container">
      <SubCategory
        currSubCategory={currSubCategory}
        subCategories={getSubCategory(category)}
        subCategoryOnClick={subCategoryOnClick}
      />
      <SubCategoryItemsContainer
        cartItems={cartItems}
        products={getItems(currSubCategory, category)}
        addProduct={addProduct}
        deleteProduct={deleteProduct}
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

export default ProductsContainer;
