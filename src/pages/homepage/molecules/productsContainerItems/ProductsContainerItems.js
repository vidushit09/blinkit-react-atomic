import React from "react";
import Product from "../product";

function productsContainerItems(props){
    const {products, addProduct, deleteProduct}=props;
    let list= products.map((product,index)=>{
        return(
            <Product key={index} product={product} addProduct={addProduct} deleteProduct={deleteProduct}/>
        )
    })
    return(
        <div className="products-container__items" id="products-container__items">
            {list}
        </div>
    )
}

export default productsContainerItems;