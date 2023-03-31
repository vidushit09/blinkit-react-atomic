import React from "react";
import DefaultCart from "../../atoms/defaultCart";
import UpdatedCart from "../../atoms/updatedCart";

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

export default myCart;