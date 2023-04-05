export const getCartCount=(cartItems)=>{

    let quantity=0;
    cartItems.forEach((value, key)=> {
        quantity+=value.quantity;
    })
    return quantity;
}