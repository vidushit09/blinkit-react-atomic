import React from "react";
import PropTypes from "prop-types";
import "./updateButton.css";

class UpdateButton extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.cartItems.get(this.props.product.id) != undefined) {
      this.state = {
        showDefault: false,
      };
    } else {
      this.state = {
        showDefault: true,
      };
    }
  }

  render() {
    let showDefault = this.props.displayDefault,
      val;
    let {
      count,
      displayDefault,
      cartItems,
      product,
      firstAdd,
      plusone,
      minusone,
    } = this.props;
    if (this.props.cartItems.get(this.props.product.id) != undefined) {
      showDefault = false;
      val = cartItems.get(product.id).quantity;
    }

    return (
      <>
        <button
          id="products-container__item-add--default"
          className="products-container__item--add-default"
          onClick={() => firstAdd(product)}
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
            onClick={() => minusone(product)}
          ></i>
          <div className="count">{val}</div>
          <i
            className="fa fa-plus"
            aria-hidden="true"
            id="plus-button"
            onClick={() => plusone(product)}
          ></i>
        </div>
      </>
    );
  }
}

UpdateButton.propTypes = {
  id: PropTypes.string,
};
UpdateButton.defaultProps = {
  id: undefined,
};

export default UpdateButton;
