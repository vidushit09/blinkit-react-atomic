import React from "react";
import CheckoutItem from "../../molecules/checkoutItem";
import "./checkoutItems.css";

function CheckoutItems(props){
    const {addProduct,deleteProduct}=props;
    let productsList=[];
    let products=[];
    
    Object.keys(window.localStorage).forEach(function(key){
        products.push(JSON.parse(window.localStorage.getItem(key)));
     });
     products.forEach(product => {
        productsList.push(
            <CheckoutItem product={product} addProduct={addProduct} deleteProduct={deleteProduct} />
        )
     });


    return(
        <ul className="checkout-items-list">
            {productsList}
        </ul>
    )
}

export default CheckoutItems;