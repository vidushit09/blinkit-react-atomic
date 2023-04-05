export const getCartTotalDiscounted=(cartItems)=>{
    if(cartItems.size==0)
        return 0;
    let total=0;
    Object.keys(cartItems).forEach(key => {
        total+= cartItems[key].quantity* Number(cartItems[key].discountedPrice)
    });
    total=total.toFixed(2);
    return total;
}