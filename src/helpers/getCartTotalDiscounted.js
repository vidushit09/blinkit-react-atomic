export const getCartTotalDiscounted=(cartItems)=>{
    let total=0;
    cartItems.forEach(element => {
        total+= element.quantity* Number(element.discountedPrice)
    });
    total=total.toFixed(2);
    return total;
}