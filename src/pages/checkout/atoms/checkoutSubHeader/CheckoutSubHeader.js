import React from "react";
import "./checkoutSubHeader.css";
import PropTypes from "prop-types";
import { getCartCount } from "../../../../helpers/getCartCount";

function CheckoutSubHeader(props){
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


export default CheckoutSubHeader;