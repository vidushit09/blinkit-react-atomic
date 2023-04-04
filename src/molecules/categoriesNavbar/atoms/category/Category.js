import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./category.css";

function Category(props) {
  const { category, categoryClick } = props;
  return (
    <Link to="/">
      <li
        className="category-list__list-item display-flex"
        onClick={categoryClick}
      >
        {category}
      </li>
    </Link>
  );
}
Category.propTypes = {
  category: PropTypes.string,
};
Category.defaultProps={
  category:undefined
}
export default Category;
