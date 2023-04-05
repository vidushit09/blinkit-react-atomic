import React from "react";
import "./checkoutSubHeader.css";
import PropTypes from "prop-types";
//import { getCartCount } from "../../../../helpers/getCartCount";
import { connect } from "react-redux";

function CheckoutSubHeader(props){
    let getCartCount=()=>{
        if(props.cartItems.size==0)
            return 0;
        let quantity=0;
        props.cartItems.forEach((value, key)=> {
            quantity+=value.quantity;
        })
        return quantity;
    }
    return (
        <>
            <div className="delivery-time">
                Delivery in 10 minutes
            </div>
            <div className="items-count">
                {getCartCount()} items
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