import React from "react";
import "./checkoutSubHeader.css";
import PropTypes from "prop-types";

function CheckoutSubHeader(props){
    return (
        <>
            <div className="delivery-time">
                Delivery in 10 minutes
            </div>
            <div className="items-count">
                {props.cartCount} items
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