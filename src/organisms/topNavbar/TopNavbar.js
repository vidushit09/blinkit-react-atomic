import React from "react";
import {Logo} from "../../atoms/logo";
import {DeliveryDetails} from "../../atoms/deliveryDetails";
import {Login} from "../../atoms/login";
import {MyCart} from "../../molecules/myCart";

function topNavbar(props){
    return(
        <div className="navbar display-flex">
            <div className="navbar__left display-flex">
                <Logo />
                <DeliveryDetails />
            </div>
            <div className="navbar__right">
                <Login />
                <MyCart cartCount={props.cartCount} cartDiscount={props.cartDiscount} displayCartDefault={props.displayCartDefault}/>
            </div>
        </div>
    )
}

export default topNavbar;