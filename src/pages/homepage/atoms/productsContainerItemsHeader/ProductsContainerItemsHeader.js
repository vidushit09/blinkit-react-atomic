import React from "react";
import styles from "./productsContainerItemsHeader.module.css";
import stylesCommon from "../../../../App.module.css";

function ProductsContainerItemsHeader(props) {
  return (
    <div className={`${styles.header} ${stylesCommon.displayFlex}`}>
      <div className={styles.buyFreshOnline}>Buy Fresh Vegetables Online</div>
      <div className={stylesCommon.displayFlex}>
        <div className={styles.sort}>Sort By</div>
        <select
          name="dropdown"
          id={styles.sortDropdown}
          className={styles.dropdown}
          onChange={props.sortBy}
        >
          <option>Relevance</option>
          <option>Price (Low to High)</option>
          <option>Price (High to Low)</option>
          <option>Discount (High to Low)</option>
        </select>
      </div>
    </div>
  );
}

export default ProductsContainerItemsHeader;
