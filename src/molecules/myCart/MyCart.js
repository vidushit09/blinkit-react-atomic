import React from "react";
import {DefaultCart} from "../../atoms/defaultCart";
import {UpdatedCart} from "../../atoms/updatedCart";

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