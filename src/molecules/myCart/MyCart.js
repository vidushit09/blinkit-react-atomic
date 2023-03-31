import React from "react";
import DefaultCart from "../../atoms/defaultCart";
import UpdatedCart from "../../atoms/updatedCart";
import PropTypes from 'prop-types';

function myCart(props){
    let cart;
    const {cartCount, cartDiscount}=props;
    
    if(cartCount==0){
        cart=<DefaultCart />
    }
    else{
        cart= <UpdatedCart cartDiscount={cartDiscount} cartCount={cartCount}/>
    }
    return (
        <>
            {cart}
        </>
        
    )
}

myCart.propTypes={
    cartCount:PropTypes.number,
    cartDiscount: PropTypes.string
}

export default myCart;