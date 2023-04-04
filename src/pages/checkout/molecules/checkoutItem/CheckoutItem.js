import React from "react";
import data from "../../../../data/data.json";
import UpdateButton from "../../../../atoms/updateButton";
import "./checkoutItem.css";
import PropTypes from "prop-types";

function CheckoutItem(props) {
  const { product, addProduct, deleteProduct } = props;
  console.log(product);
  let item = data.products.filter((obj) => obj.id == product.id)[0];
  let thumbnail = "http://127.0.0.1:3000/" + item.thumbnail;
  let discount = Number(item.discount);
  let price = Number(item.price);
  let updatedPrice = (price * (1 - 0.01 * discount)).toFixed(2);
  let quantity = item.quantity;
  let name = item.name;

  return (
    <li className="checkout-item">
      <div className="checkout-item__left">
        <div className="product-id" style={{ display: "none" }}>
          {product.id}
        </div>
        <div className="checkout-item--img">
          <img src={thumbnail} />
        </div>
        <div className="item-information">
          <div className="products-container__item-name">{name}</div>
          <div className="checkout-container__item-weight">{quantity} kg</div>
          <div className="checkout-item__price">
            <div className="products-container__discounted-price">
              ₹{updatedPrice}
            </div>
            <div className="products-container__actual-price">₹{price}</div>
          </div>
        </div>
      </div>
      <div className="checkout-item__right">
        <UpdateButton
          product={product}
          addProduct={addProduct}
          deleteProduct={deleteProduct}
        />
      </div>
    </li>
  );
}
CheckoutItem.propTypes = {
  product: PropTypes.object,
};
CheckoutItem.defaultProps = {
  product: undefined,
};

export default CheckoutItem;
