import React from "react";
import DefaultCart from "../atoms/DefaultCart";
import UpdatedCart from "../atoms/UpdatedCart";

function myCart(props){
    let cart;
    if(props.cartCount==0){
        cart=<DefaultCart />
    }
    else{
        cart= <UpdatedCart cartDiscount={props.cartDiscount} cartCount={props.cartCount}/>
    }
    return (
        <>
            {cart}
        </>
        
    )
}

export default myCart;