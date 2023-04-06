import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./category.module.css";
import stylesCommon from "../../../../App.module.css";

function Category(props) {
  const { category, categoryClick } = props;
  return (
    <Link to="/">
      <li
        className={`${styles.listItem} ${stylesCommon.displayFlex}`}
        onClick={() => categoryClick(props.category)}
      >
        {category}
      </li>
    </Link>
  );
}
Category.propTypes = {
  category: PropTypes.string,
};
Category.defaultProps = {
  category: undefined,
};
export default Category;
