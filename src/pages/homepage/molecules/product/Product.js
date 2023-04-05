import React from "react";
import UpdateButton from "../../../../atoms/updateButton";
import { calculateDiscountedPrice } from "../../../../helpers/calculateDiscountedPrice.js";
import "./product.css";
import PropTypes from "prop-types";
import { addToCart } from "../../../../redux/cart/cartActions";
import { removeFromCart } from "../../../../redux/cart/cartActions";
import { connect } from "react-redux";

class Product extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.cartItems != undefined) {
      this.state = {
        displayDefault: true,
        count:
          this.props.cartItems.get(String(this.props.index)) != undefined
            ? this.props.cartItems.get(String(this.props.index)).quantity
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
    this.props.addToCart(product.id);
  };
  plusone = (product) => {
    this.setState({
      count: this.state.count + 1,
    });
    this.props.addToCart(product.id);
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
    this.props.removeFromCart(product.id);
  };
  render() {
    let { key, product, products, count, cart, addToCart, removeFromCart } =this.props;
    let path = "http://127.0.0.1:3000/" + product.thumbnail;
    let displayDefault = this.state.displayDefault;

    if (parseInt(this.state.count) != 0) {
      displayDefault = false;
    }
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
            count={this.state.count}
            displayDefault={this.state.displayDefault}
            product={product}
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
};
Product.defaultProps = {
  product: undefined,
};

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    count: state.product.count,
    cart: state.cart.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
