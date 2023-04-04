export const cartInner=(cartCount,cartDiscount)=> {
    if (cartCount == 0) {
      return (
        <>
          <div className="my-cart">My Cart</div>
          <div className="my-cart-text"></div>
        </>
      );
    } else {
      return (
        <div className="cartRight">
          <div>{cartCount} items</div>
          <div>₹ {cartDiscount}</div>
        </div>
      );
    }
  }