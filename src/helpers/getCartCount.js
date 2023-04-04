export const getCartCount=(cartItems)=>{
    console.log(cartItems);
    let quantity=0;
    cartItems.forEach(element => {
        quantity+=element.quantity;
    });
    return quantity;
}