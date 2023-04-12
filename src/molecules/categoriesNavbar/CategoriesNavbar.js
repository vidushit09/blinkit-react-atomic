import React from "react";
import CategoryMore from "./atoms/categoryMore";
import PropTypes from "prop-types";
import styles from "./categoriesNavbar.module.css";
import stylesCommon from "../../App.module.css";
import { categoryClick } from "../../actions/productActions";
import { connect } from "react-redux";
import { categoryListHelper } from "./helpers/categoryListHelper";

function CategoriesNavbar(props) {
  let list;
  const { categories, categoryClick } = props;
  if (categories.length <= 7) {
    list = categoryListHelper(categories, categoryClick);
  } else {
    list = categoryListHelper(categories.slice(0, 7), categoryClick);
    list.push(
      <CategoryMore
        categories={categories.slice(7)}
        categoryClick={categoryClick}
      />
    );
  }
  return (
    <ul className={`${styles.categoryList} ${stylesCommon.displayFlex}`}>
      {list}
    </ul>
  );
}
CategoriesNavbar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};
CategoriesNavbar.defaultProps = {
  categories: [],
};

const mapStateToProps = (state) => {
  return {
    categories: state.product.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryClick: (category) => dispatch(categoryClick(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesNavbar);
