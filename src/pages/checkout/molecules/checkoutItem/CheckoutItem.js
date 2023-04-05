import React from "react";
import UpdateButton from "../../../../atoms/updateButton";
import "./checkoutItem.css";
import PropTypes from "prop-types";
import { addToCart } from "../../../../actions/cartActions";
import { removeFromCart } from "../../../../actions/cartActions";
import { connect } from "react-redux";
import { calculateDiscountedPrice } from "../../../../helpers/calculateDiscountedPrice";

class CheckoutItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDefault: false,
      count: this.props.product.quantity
    };
  }

  plusone = () => {
    this.setState({
      count: this.state.count + 1,
    });
    this.props.addToCart(this.props.id);
  };
  minusone = () => {
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
    this.props.removeFromCart(this.props.id);
  };

  render() {
    if (this.state.count != 0) {
      const { product, id, addToCart, removeFromCart } = this.props;
      let thumbnail = "http://127.0.0.1:3000/" + product.thumbnail;
      let discount = Number(product.discount);
      let price = Number(product.original);
      let updatedPrice = calculateDiscountedPrice(price, discount);
      let quantity = product.quantity;
      let name = product.name;

      return (
        <li className="checkout-item">
          <div className="checkout-item__left">
            <div className="product-id" style={{ display: "none" }}>
              {id}
            </div>
            <div className="checkout-item--img">
              <img src={thumbnail} />
            </div>
            <div className="item-information">
              <div className="products-container__item-name">{name}</div>
              <div className="checkout-container__item-weight">
                {quantity} kg
              </div>
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
              plusone={this.plusone}
              minusone={this.minusone}
              displayDefault={this.state.displayDefault}
              count={this.state.count}
              id={id}
            />
          </div>
        </li>
      );
    } else {
      return <></>;
    }
  }
}
CheckoutItem.propTypes = {
  product: PropTypes.object,
  id: PropTypes.number
};
CheckoutItem.defaultProps = {
  product: {},
  id: 0
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
