export const calculateDiscountedPrice = (price, discount) => {
    price = Number(price);
    discount = Number(discount);
    price = (price * (1 - 0.01 * discount)).toFixed(2);
    return price;
}