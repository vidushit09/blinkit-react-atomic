import lodash from "lodash";
export const getCartCount = (cartItems) => {
  let quantity = 0;
  cartItems?.forEach((item) => {
    quantity += lodash.get(item, "quantity");
  });
  return quantity;
};
