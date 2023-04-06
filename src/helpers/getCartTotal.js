export const getCartTotal = (cartItems) => {
  let total = 0;
  cartItems?.forEach((element) => {
    total += element.quantity * Number(element.original);
  });
  total = total.toFixed(2);
  return total;
};
