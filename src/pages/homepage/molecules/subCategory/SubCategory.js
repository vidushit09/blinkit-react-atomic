import React from "react";
import SubCategoryListItem from "../../atoms/subCategoryListItem";
import "./subCategory.css";
import PropTypes from "prop-types";
import { subCategoryClick } from "../../../../actions/productActions";
import { connect } from "react-redux";
import { subCategoryHelper } from "./helpers/subCategoryHelper";

function SubCategory(props) {
  const { currSubCategory, subCategories, subCategoryClick } = props;
  let list = subCategoryHelper(subCategories, currSubCategory, subCategoryClick);
  
  let path = "http://127.0.0.1:3000/" + subCategories[0].categoryThumbnail;
  return (
    <ul
      className="products-container__category"
      id="products-container__category"
    >
      <li
        className={
          currSubCategory == "All"
            ? "products-container__category--active display-flex"
            : "products-container__category--inactive display-flex"
        }
        onClick={()=>subCategoryClick("All")}
      >
        <div className="products-container__category__category-image">
          <img src={path} className="products-container__category-image-img" />
        </div>
        All
      </li>
      {list}
    </ul>
  );
}
SubCategory.propTypes = {
  currSubCategory:PropTypes.string,
  subCategories: PropTypes.array,
};
SubCategory.defaultProps = {
  currSubCategory:undefined,
  subCategories:[]
};


const mapStateToProps = (state) => {
  return {
    subCategories: state.product.subCategories,
    currSubCategory: state.product.subCategory
  };
};

const mapDispatchToProps = (dispatch) => {
return {
  subCategoryClick: (subCategory)=> dispatch(subCategoryClick(subCategory))
};
};

export default connect(mapStateToProps, mapDispatchToProps)(SubCategory);

