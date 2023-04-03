import React from "react";
import CheckoutProceed from "../../atoms/checkoutProceed";
import "./style.css";

function checkoutFooter(props){
    const {cartOriginal,cartDiscount, cartCount}=props;
    return(
        <div className="checkout-footer">
            <div className="mrp-details">
                <div className="mrp-text">
                    MRP
                </div>
                <div className="mrp">
                    ₹{cartOriginal}
                </div>
            </div>
            <div className="discount-details">
                <div className="discount-text">
                    Product discount
                </div>
                <div className="discount">
                    -₹{(cartOriginal-cartDiscount).toFixed(2)}
                </div>
            </div>
            <div className="delivery-details">
                <div className="delivery-text">
                    Delivery Charge
                </div>
                <div className="delivery-charge">
                    <div className="striked">
                        ₹15
                    </div>
                    <div className="free">
                        FREE
                    </div>
                    
                </div>
            </div>
            <div className="total-details">
                <div className="total-text">
                    Grand total
                </div>
                <div className="total">
                    ₹{cartDiscount}
                </div>
            </div>
            <div className="coupons-disclaimer">
                Coupons are only applicable on Blinkit app
            </div>
            <CheckoutProceed cartCount={cartCount} cartOriginal={cartOriginal} cartDiscount={cartDiscount}/>
            
        </div>
    )
}

export default checkoutFooter;