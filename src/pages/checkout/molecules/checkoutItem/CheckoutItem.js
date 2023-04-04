import React from "react";
import data from "../../../../data/data.json";
import UpdateButton from "../../../../atoms/updateButton";
import "./checkoutItem.css";
import PropTypes from "prop-types";


class CheckoutItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDefault: false,
      count: this.props.cartItems.get(this.props.index).quantity,
      cartItems: this.props.cartItems,
    };
  }

  plusone = (product) => {
    this.setState({
      count: this.state.count + 1,
    });
    this.props.addProduct(product);
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
    this.props.deleteProduct(product);
  };

  render(){
    const {cartItems,product,index, addProduct, deleteProduct } = this.props;

    let item = data.products.filter((obj) => obj.id == index)[0];
    console.log(item);
    let thumbnail = "http://127.0.0.1:3000/" + product.thumbnail;
    let discount = Number(product.discount);
    let price = Number(product.original);
    let updatedPrice = (price * (1 - 0.01 * discount)).toFixed(2);
    let quantity = product.quantity;
    let name = product.name;

    return (
      <li className="checkout-item">
        <div className="checkout-item__left">
          <div className="product-id" style={{ display: "none" }}>
            {index}
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
            cartItems={cartItems}
            product={item}
            addProduct={addProduct}
            deleteProduct={deleteProduct}
            plusone={this.plusone}
            minusone={this.minusone}
          />
        </div>
      </li>
    );
  }

  

  
}
CheckoutItem.propTypes = {
  product: PropTypes.object,
};
CheckoutItem.defaultProps = {
  product: undefined,
};

export default CheckoutItem;
