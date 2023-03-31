import React from "react";
import CheckoutItem from "../../molecules/checkoutItem";

function checkoutItems(props){
    const {addProduct,deleteProduct}=props;
    let itemsIndex=[];
    let products=[];
    
    Object.keys(window.localStorage).forEach(function(key){
        itemsIndex.push(key);
     });
     itemsIndex.forEach(index => {
        products.push(
            <CheckoutItem index={index} addProduct={addProduct} deleteProduct={deleteProduct} />
        )
     });


    return(
        <ul className="checkout-items-list">
            {products}
        </ul>
    )
}

export default checkoutItems;