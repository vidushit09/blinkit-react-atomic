import React from "react";
import UpdateButton from "../../../../atoms/updateButton";
import { calculateDiscountedPrice } from "../../../../helpers/calculateDiscountedPrice.js";
import "./product.css";
import PropTypes from "prop-types";

function Product(props) {
  const { product, addProduct, deleteProduct } = props;
  let path = "http://127.0.0.1:3000/" + product.thumbnail;
  return (
    <div className="products-container__item">
      <div className="product-id" style={{ display: "none" }}>
        {product.id}
      </div>
      <div className="products-container__item-image">
        <div className="products-container__discount">
          {product.discount}% OFF{" "}
        </div>
        <img src={path} className="product-container__item--img" />
        <div className="products-container__sourced-at">
          Sourced at {product.sourcedAt}
        </div>
      </div>
      <div className="products-container__item-name">{product.name}</div>
      <div className="products-container__item-weight">
        {product.quantity} kg
      </div>
      <div className="products-container__item-footer">
        <div className="products-container__price-details">
          <div className="products-container__discounted-price">
            ₹{calculateDiscountedPrice(product.price, product.discount)}
          </div>
          <div className="products-container__actual-price">
            ₹{product.price}
          </div>
        </div>
        <UpdateButton
          product={product}
          addProduct={addProduct}
          deleteProduct={deleteProduct}
        />
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};
Product.defaultProps = {
  product: undefined,
};


export default Product;
