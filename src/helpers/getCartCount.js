export const getCartCount=(cartItems)=>{
    let quantity=0;
    cartItems?.forEach((value)=> {
        quantity+=value.quantity;
    })
    return quantity;
}