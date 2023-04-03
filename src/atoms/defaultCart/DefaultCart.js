import React from "react";
import { Link} from "react-router-dom";
import "./style.css";
function defaultCart(){
    return(
        <Link to="/checkout">
        <button className="navbar__mycart">
            <i className="fa fa-shopping-cart"></i>
            <div className="my-cart">My Cart</div>
            <div className="my-cart-text">
            </div>
        </button>
        </Link>
    )
}

export default defaultCart;