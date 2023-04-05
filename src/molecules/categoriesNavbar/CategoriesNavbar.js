import React from "react";
import Category from "./atoms/category"
import CategoryMore from "./atoms/categoryMore";
import PropTypes from "prop-types";
import "./categoriesNavbar.css";
import { categoryClick } from "../../redux/product/productActions.js";
import { connect } from "react-redux";

function CategoriesNavbar(props) {
  let list,
    i = 7;
  const { categories, categoryClick } = props;
  console.log(categoryClick);
  if (categories.length <= 7) {
    list = categories.map((category, index) => {
      return (
        <Category
          category={category}
          categoryClick={categoryClick}
        />
      );
    });
  } else {
    list = categories.slice(0, 7).map((category, index) => {
      return (
        <Category
          category={category}
          categoryClick={categoryClick}
        />
      );
    });

    list.push(
      <CategoryMore
        categories={categories.slice(7)}
        categoryClick={categoryClick}
      />
    );
  }
  return (
    <ul className="category-list display-flex" id="category-list">
      {list}
    </ul>
  );
}
CategoriesNavbar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};
CategoriesNavbar.defaultProps={
  categories:[]
}

const mapStateToProps = (state) => {
  return {
    categories: state.product.categories
  };
};

const mapDispatchToProps = (dispatch) => {
return {
  categoryClick: (category)=> dispatch(categoryClick(category))
};
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesNavbar);
