import React from "react";
import PropTypes from "prop-types";
import "./updateButton.css";
import { connect } from "react-redux";

class UpdateButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDefault: this.props.displayDefault,
    };
  }

  render() {
    const { count, displayDefault, product, id, firstAdd, plusone, minusone, cartItems } = this.props;
    let val = 0,showDefault = true;
    if (cartItems.get(id) != undefined) {
      showDefault = false;
      val = cartItems.get(id).quantity;
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

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems
  };
};



export default connect(mapStateToProps)(UpdateButton);

