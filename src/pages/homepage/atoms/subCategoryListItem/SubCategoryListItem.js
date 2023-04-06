import React from "react";
import styles from "./subCategoryListItem.module.css";
import stylesCommon from "../../../../App.module.css";
import PropTypes from "prop-types";

function SubCategoryListItem(props) {
  const { subCategory, currSubCategory, subCategoryClick } = props;
  let path = "http://127.0.0.1:3000/" + subCategory.categoryThumbnail;
  console.log(styles.categoryActive, styles.categoryInactive);
  return (
    <>
      <li
        className={
          currSubCategory == subCategory.subCategory
            ? `${styles.categoryActive} ${stylesCommon.displayFlex}`
            : `${styles.categoryInactive} ${stylesCommon.displayFlex}`
        }
        onClick={()=>subCategoryClick(subCategory.subCategory)}
      >
        <div className={styles.category__categoryImage }>
          <img src={path} className={styles.categoryImage__img} />
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
