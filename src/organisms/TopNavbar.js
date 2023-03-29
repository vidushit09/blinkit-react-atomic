import React from "react";
import Logo from "../atoms/Logo";
import DeliveryDetails from "../atoms/DeliveryDetails";
import Login from "../atoms/Login";
import MyCart from "../molecules/MyCart";

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