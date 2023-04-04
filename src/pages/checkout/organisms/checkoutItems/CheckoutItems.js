import React from "react";
import SubCategoryItemsContainer from "../../../homepage/molecules/subCategoryItemsContainer";
import CheckoutItem from "../../molecules/checkoutItem";
import "./checkoutItems.css";

function CheckoutItems(props){
    const {cartItems,addProduct,deleteProduct}=props;
    let products=[];
    
    cartItems.forEach((product,key)=>{
        console.log(key);
        products.push(
            <CheckoutItem cartItems={cartItems} product={product} index={key} addProduct={addProduct} deleteProduct={deleteProduct} />
        )
    })

    return(
        <ul className="checkout-items-list">
            {products}
        </ul>
    )
}

export default CheckoutItems;