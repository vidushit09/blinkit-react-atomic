import { calculateDiscountedPrice } from "./calculateDiscountedPrice";
function addProductHelper(tempCartItems, product){
    let obj;
    if (tempCartItems.get(product.id) == undefined) {
        obj = {
          name: product.name,
          original: product.price,
          discountedPrice: calculateDiscountedPrice(
            product.price,
            product.discount
          ),
          discount: product.discount,
          quantity: 1,
          thumbnail: product.thumbnail,
        };
        tempCartItems.set(product.id, obj);
      } else {
        obj = tempCartItems.get(product.id);
        obj["quantity"] = Number(obj["quantity"]) + 1;
        tempCartItems.set(product.id, obj);
      }
      return tempCartItems;
}

export {addProductHelper};