import React from "react";
import PropTypes from "prop-types";
import styles from "./categoryMore.module.css";
import { categoryMoreHelper } from "../../helpers/categoryMoreHelper";
import stylesCommon from "../../../../App.module.css";

function CategoryMore(props) {
  const { categories, categoryClick } = props;
  let list = categoryMoreHelper(categories, categoryClick);
  return (
    <li
      className={`${styles.listItem} ${stylesCommon.displayFlex}`}
      id={styles.more}
    >
      More
      <i className="fa fa-angle-down"></i>
      <ul id={styles.dropdown}>{list}</ul>
    </li>
  );
}
CategoryMore.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};
CategoryMore.defaultProps = {
  categories: [],
};
export default CategoryMore;
