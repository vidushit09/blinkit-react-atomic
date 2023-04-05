import React from "react";
import "./subCategoryListItem.css";
import PropTypes from "prop-types";

function SubCategoryListItem(props) {
  const { subCategory, currSubCategory, subCategoryClick } = props;
  let path = "http://127.0.0.1:3000/" + subCategory.categoryThumbnail;
  return (
    <>
      <li
        className={
          currSubCategory == subCategory.subCategory
            ? "products-container__category--active display-flex"
            : "products-container__category--inactive display-flex"
        }
        onClick={()=>subCategoryClick(subCategory.subCategory)}
      >
        <div className="products-container__category__category-image">
          <img src={path} className="products-container__category-image-img" />
        </div>
        {subCategory.subCategory}
      </li>
    </>
  );
}

SubCategoryListItem.propTypes={
  subCategory:PropTypes.string,
  currSubCategory:PropTypes.string
}
SubCategoryListItem.defaultProps={
  subCategory:undefined,
  currSubCategory:undefined
}

export default SubCategoryListItem;
