export const getCartCount=(cartItems)=>{
    console.log(cartItems["1"],cartItems[1]);
    if(cartItems.size==0)
        return 0;
    let quantity=0;
    Object.values(cartItems).forEach(value => {
        console.log(value);
        //quantity+=cartItems[key].quantity;
    });
    console.log(quantity);
    return quantity;
}