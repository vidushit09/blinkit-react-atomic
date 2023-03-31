import React from "react";
import CheckoutItem from "../../molecules/checkoutItem";

function checkoutItems(props){
    const {addProduct,deleteProduct}=props;
    let itemsMap= new Map();
    let products=[];
    
    Object.keys(window.localStorage).forEach(function(key){
        itemsMap.set(key,window.localStorage.getItem(key));
     });
     for(let [index,value] of itemsMap){
        products.push(

            <CheckoutItem index={index} addProduct={addProduct} deleteProduct={deleteProduct} />
        )
     }

    return(
        <ul className="checkout-items-list">
            {products}
        </ul>
    )
}

export default checkoutItems;