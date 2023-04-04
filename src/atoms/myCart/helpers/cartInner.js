import { getCartCount } from "../../../helpers/getCartCount";
import { getCartTotalDiscounted } from "../../../helpers/getCartTotalDiscounted";

export const cartInner=(cartItems)=> {
  console.log(cartItems.size==0);
  if(cartItems.size==0){
    return (
      <>
        <div className="my-cart">My Cart</div>
        <div className="my-cart-text"></div>
      </>
    );
  }
    let cartCount=getCartCount(cartItems);
    let cartDiscount=getCartTotalDiscounted(cartItems);
    if (cartCount == 0) {
      
    } else {
      return (
        <div className="cartRight">
          <div>{cartCount} items</div>
          <div>₹ {cartDiscount}</div>
        </div>
      );
    }
  }