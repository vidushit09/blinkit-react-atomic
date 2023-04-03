import React from "react";
import "./style.css";

function checkoutSubHeader(props){
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

export default checkoutSubHeader;