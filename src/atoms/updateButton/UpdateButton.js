import React from "react";
import PropTypes from "prop-types";
import styles from "./updateButton.module.css";
import { connect } from "react-redux";
import { DEFAULT_OBJECT } from "../../constants/constants.general";
var _ = require("lodash");

class UpdateButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDefault: this.props.displayDefault,
    };
  }

  render() {
    const {
      count,
      displayDefault,
      product,
      id,
      firstAdd,
      plusone,
      minusone,
      cartItems,
    } = this.props;
    let val = 0,
      showDefault = true;
    if (cartItems?.get(id) != undefined) {
      showDefault = false;
      val = cartItems?.get(id).quantity;
    }

    return (
      <>
        <button
          id={styles.itemAddDefault}
          className={styles.itemAddDefault}
          onClick={() => firstAdd(product)}
          style={{ display: showDefault ? "block" : "none" }}
        >
          ADD
        </button>
        <div
          id={styles.itemAddUpdated}
          className={styles.itemAddUpdated}
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
  id: PropTypes.number,
  count: PropTypes.number,
  displayDefault: PropTypes.bool,
  product: PropTypes.object,
  cartItems: PropTypes.object,
};
UpdateButton.defaultProps = {
  id: undefined,
  count: 0,
  displayDefault: true,
  product: DEFAULT_OBJECT,
  cartItems: DEFAULT_OBJECT,
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(UpdateButton);
