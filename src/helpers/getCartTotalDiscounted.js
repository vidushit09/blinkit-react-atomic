export const getCartTotalDiscounted=(cartItems)=>{
    if(cartItems.size==0)
        return 0;
    let total=0;
    cartItems?.forEach(value => {
        total+= value.quantity* Number(value.discountedPrice)
    });
    total=total.toFixed(2);

    return total;
}