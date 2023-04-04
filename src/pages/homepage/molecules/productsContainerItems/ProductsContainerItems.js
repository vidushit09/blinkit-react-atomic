import React from "react";
import Product from "../product";
import "./productsContainerItems.css";
import PropTypes from "prop-types";

function ProductsContainerItems(props) {
  const { cartItems, products, addProduct, deleteProduct } = props;
  let list = products.map((product) => {
    return (
      <Product
        cartItems={cartItems}
        key={product.id}
        product={product}
        addProduct={addProduct}
        deleteProduct={deleteProduct}
      />
    );
  });
  return (
    <div className="products-container__items" id="products-container__items">
      {list}
    </div>
  );
}

ProductsContainerItems.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};
ProductsContainerItems.defaultProps = {
  product: [],
};


export default ProductsContainerItems;
