import React from "react";
import Logo from "../../atoms/logo";
import DeliveryDetails from "../../atoms/deliveryDetails";
import Login from "../../atoms/login";
import MyCart from "../../molecules/myCart";

function topNavbar(props){
    const {cartCount, cartDiscount}=props;
    return(
        <div className="navbar display-flex">
            <div className="navbar__left display-flex">
                <Logo />
                <DeliveryDetails />
            </div>
            <div className="navbar__right">
                <Login />
                <MyCart cartCount={cartCount} cartDiscount={cartDiscount}/>
            </div>
        </div>
    )
}

export default topNavbar;