import React from "react";
import CheckoutItem from "../../molecules/checkoutItem";
import "./checkoutItems.css";
import { connect } from "react-redux";

function CheckoutItems(props){
    const {cartItems}=props;
    let products=[];
    
    cartItems.forEach((product,key)=>{
        products.push(
            <CheckoutItem cartItems={cartItems} product={product} id={key}/>
        )
    })

    return(
        <ul className="checkout-items-list">
            {products}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
      cartItems: state.cart.cartItems
    };
  };
  
  export default connect(mapStateToProps)(CheckoutItems);