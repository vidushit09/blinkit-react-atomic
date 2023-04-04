import React from "react";
import SubCategoryListItem from "../../atoms/subCategoryListItem";
import "./subCategory.css";
import PropTypes from "prop-types";

function SubCategory(props) {
  const { currSubCategory, subCategories, subCategoryOnClick } = props;
  let list = subCategories.map((subCategory, index) => {
    return (
      <SubCategoryListItem
        key={index}
        subCategory={subCategory}
        currSubCategory={currSubCategory}
        subCategoryOnClick={subCategoryOnClick}
      />
    );
  });
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
        onClick={subCategoryOnClick}
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


export default SubCategory;
