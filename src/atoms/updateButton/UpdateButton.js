import React from "react";
import PropTypes from "prop-types";
import "./updateButton.css";

function UpdateButton(props) {
  const { product, addProduct, deleteProduct } = props;
  let val = 0,
    showDefault = true;

  if (window.localStorage.getItem(product.id)) {
    val = JSON.parse(window.localStorage.getItem(product.id)).quantity;
    showDefault = false;
  }

  return (
    <>
      <button
        id="products-container__item-add--default"
        className="products-container__item--add-default"
        onClick={() => addProduct(product)}
        style={{ display: showDefault ? "block" : "none" }}
      >
        ADD
      </button>
      <div
        id="products-container__item-add--updated"
        className="products-container__item--add-updated"
        style={{ display: showDefault ? "none" : "flex" }}
      >
        <i
          className="fa fa-minus"
          aria-hidden="true"
          id="minus-button"
          onClick={() => deleteProduct(product)}
        ></i>
        <div className="count">{val}</div>
        <i
          className="fa fa-plus"
          aria-hidden="true"
          id="plus-button"
          onClick={() => addProduct(product)}
        ></i>
      </div>
    </>
  );
}
UpdateButton.propTypes = {
  id: PropTypes.string,
};
UpdateButton.defaultProps={
  id:undefined
}

export default UpdateButton;
