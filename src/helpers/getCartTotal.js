import lodash from "lodash";
export const getCartTotal = (cartItems) => {
  let total = 0;
  cartItems?.forEach((item) => {
    total += lodash.get(item,"quantity") * Number(lodash.get(item,"original"));
  });
  total = total.toFixed(2);
  return total;
};
