import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./categoryMore.css";

function CategoryMore(props) {
  const { categories, categoryClick } = props;
  let list = categories.map((category, index) => {
    return (
      <Link to="/">
        <li onClick={()=>props.categoryClick(category)} key={index}>
          {category}
        </li>
      </Link>
    );
  });
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
