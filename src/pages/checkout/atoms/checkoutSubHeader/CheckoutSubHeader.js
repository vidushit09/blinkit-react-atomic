import React from "react";
import "./checkoutSubHeader.css";
import PropTypes from "prop-types";
import { getCartCount } from "../../../../helpers/getCartCount";
import { connect } from "react-redux";

function CheckoutSubHeader(props){
    console.log(typeof(props.cartItems));
    return (
        <>
            <div className="delivery-time">
                Delivery in 10 minutes
            </div>
            <div className="items-count">
                {getCartCount(props.cartItems)} items
            </div>
        </>
    )
}

CheckoutSubHeader.propTypes={
    cartCount:PropTypes.number
}
CheckoutSubHeader.defaultProps={
    cartCount:0
}



const mapStateToProps = (state) => {
    return {
      cartItems: state.cart.cartItems
    };
  };
  

export default connect(mapStateToProps)(CheckoutSubHeader);