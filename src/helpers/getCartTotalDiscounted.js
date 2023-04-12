import lodash from "lodash";
export const getCartTotalDiscounted = (cartItems) => {
  if (cartItems.size == 0) return 0;
  let total = 0;
  cartItems?.forEach((item) => {
    total += lodash.get(item,"quantity") * Number(lodash.get(item,"discountedPrice"));
  });
  total = total.toFixed(2);

  return total;
};
