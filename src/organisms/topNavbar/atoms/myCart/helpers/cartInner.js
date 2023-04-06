import { getCartCount } from "../../../../../helpers/getCartCount";
import { getCartTotalDiscounted } from "../../../../../helpers/getCartTotalDiscounted";
import styles from "../myCart.module.css";

export const cartInner=(cartItems)=> {
  if(cartItems.size==0){
    return (
      <>
        <div className={styles.mycart__text}>My Cart</div>
      </>
    );
  }
    let cartCount=getCartCount(cartItems);
    let cartDiscount=getCartTotalDiscounted(cartItems);
    return (
      <div className={styles.cartRight}>
        <div>{cartCount} items</div>
        <div>₹ {cartDiscount}</div>
      </div>
    );

  }