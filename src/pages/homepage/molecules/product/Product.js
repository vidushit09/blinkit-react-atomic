import React from "react";
import UpdateButton from "../../../../atoms/updateButton";
import { calculateDiscountedPrice } from "../../../../helpers/calculateDiscountedPrice.js";
import styles from "./product.module.css";
import PropTypes from "prop-types";
import { addToCart } from "../../../../actions/cartActions";
import { removeFromCart } from "../../../../actions/cartActions";
import { connect } from "react-redux";
import productReader from "../../../../readers/productReader";

class Product extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.cartItems != undefined) {
      this.state = {
        displayDefault: true,
        count:
          this.props.cartItems?.get(String(this.props.index)) != undefined
            ? this.props.cartItems?.get(String(this.props.index)).quantity
            : 0,
      };
    } else {
      this.state = {
        displayDefault: true,
        count: 0,
      };
    }
  }
  firstAdd = (product) => {
    this.setState({
      displayDefault: false,
      count: this.state.count + 1,
    });
    this.props.addToCart(productReader.id(product));
  };
  plusone = (product) => {
    this.setState({
      count: this.state.count + 1,
    });
    this.props.addToCart(productReader.id(product));
  };

  minusone = (product) => {
    if (this.state.count == 1) {
      this.setState({
        count: this.state.count - 1,
        displayDefault: true,
      });
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
    this.props.removeFromCart(productReader.id(product));
  };
  render() {
    let { product, addToCart, removeFromCart } = this.props;
    let path = "http://127.0.0.1:3000/" + productReader.thumbnail(product);
    let displayDefault = this.state.displayDefault;

    if (parseInt(this.state.count) != 0) {
      displayDefault = false;
    }
    let sourcedAt;
    if (productReader.sourcedAt(product) != undefined) {
      sourcedAt = (
        <div className={styles.sourcedAt}>
          Sourced at {productReader.sourcedAt(product)}
        </div>
      );
    }

    return (
      <div className={styles.item}>
        <div style={{ display: "none" }}>{productReader.id(product)}</div>
        <div className={styles.itemImage}>
          <div className={styles.discount}>
            {productReader.discount(product)}% OFF{" "}
          </div>
          <img src={path} className={styles.item__img} />
          {sourcedAt}
        </div>
        <div className={styles.itemName}>{productReader.name(product)}</div>
        <div className={styles.itemWeight}>
          {productReader.quantity(product)} kg
        </div>
        <div className={styles.itemFooter}>
          <div className={styles.priceDetails}>
            <div className={styles.discountedPrice}>
              ₹
              {calculateDiscountedPrice(
                productReader.price(product),
                productReader.discount(product)
              )}
            </div>
            <div className={styles.actualPrice}>
              ₹{productReader.price(product)}
            </div>
          </div>
          <UpdateButton
            count={this.state.count}
            displayDefault={this.state.displayDefault}
            product={product}
            id={productReader.id(product)}
            firstAdd={this.firstAdd}
            plusone={this.plusone}
            minusone={this.minusone}
          />
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object,
  count: PropTypes.number,
};
Product.defaultProps = {
  product: undefined,
  count: 0,
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
