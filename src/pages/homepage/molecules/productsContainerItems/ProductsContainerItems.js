import React from "react";
import styles from "./productsContainerItems.module.css";
import PropTypes from "prop-types";
import { productsContainerItemsHelper } from "./helpers/productsContainerItemsHelper.js";

function ProductsContainerItems(props) {
  const { products } = props;
  let list = productsContainerItemsHelper(products);
  return <div className={styles.items}>{list}</div>;
}

ProductsContainerItems.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};
ProductsContainerItems.defaultProps = {
  product: [],
};

export default ProductsContainerItems;
