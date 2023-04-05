import { getCartCount } from "../../../helpers/getCartCount";
import { getCartTotalDiscounted } from "../../../helpers/getCartTotalDiscounted";

export const cartInner=(cartItems)=> {
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
    return (
      <div className="cartRight">
        <div>{cartCount} items</div>
        <div>₹ {cartDiscount}</div>
      </div>
    );

  }