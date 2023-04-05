import React from "react";
import PropTypes from "prop-types";
import "./categoryMore.css";
import { categoryMoreHelper } from "../../helpers/categoryMoreHelper";

function CategoryMore(props) {
  const { categories, categoryClick } = props;
  let list= categoryMoreHelper(categories, categoryClick);
  return (
    <li className="category-list__list-item display-flex" id="more">
      More
      <i className="fa fa-angle-down"></i>
      <ul id="dropdown">{list}</ul>
    </li>
  );
}
CategoryMore.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};
CategoryMore.defaultProps={
  categories:[]
}
export default CategoryMore;
