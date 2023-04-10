import React from "react";
import styles from "./subCategory.module.css";
import stylesCommon from "../../../../App.module.css";
import PropTypes from "prop-types";
import { subCategoryClick } from "../../../../actions/productActions";
import { connect } from "react-redux";
import { subCategoryHelper } from "./helpers/subCategoryHelper";

function SubCategory(props) {
  const { currSubCategory, subCategories, subCategoryClick } = props;
  let list = subCategoryHelper(
    subCategories,
    currSubCategory,
    subCategoryClick
  );

  let path = "http://127.0.0.1:3000/" + subCategories[0].categoryThumbnail;
  return (
    <ul id={styles.category} >
      <li
        className={
          currSubCategory == "All"
            ? `${styles.categoryActive} ${stylesCommon.displayFlex}`
            : `${styles.categoryInactive} ${stylesCommon.displayFlex}`
        }
        onClick={() => subCategoryClick("All")}
      >
        <div className={styles.categoryImage}>
          <img src={path} className={styles.categoryImage__img} />
        </div>
        All
      </li>
      {list}
    </ul>
  );
}
SubCategory.propTypes = {
  currSubCategory: PropTypes.string,
  subCategories: PropTypes.array,
};
SubCategory.defaultProps = {
  currSubCategory: undefined,
  subCategories: [],
};

const mapStateToProps = (state) => {
  return {
    subCategories: state.product.subCategories,
    currSubCategory: state.product.subCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    subCategoryClick: (subCategory) => dispatch(subCategoryClick(subCategory)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubCategory);
