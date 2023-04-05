import CheckoutItem from "../molecules/checkoutItem";

function checkoutItemsHelper(cartItems){
    let products=[];
    
    cartItems.forEach((product,key)=>{
        products.push(
            <CheckoutItem product={product} id={key}/>
        )
    })
    return products;
}
export {checkoutItemsHelper}