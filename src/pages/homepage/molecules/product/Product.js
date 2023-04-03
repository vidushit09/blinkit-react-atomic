import React from "react";
import UpdateButton from "../../../../atoms/updateButton";
import { discountedPrice } from "../../helpers/discountedPrice";
import "./style.css";


class Product extends React.Component {
    firstAdd=(event)=>{
       this.props.addProduct(event.target.parentNode)
    
    }
    plusone=(event)=>{
        this.props.addProduct(event.target.parentNode.parentNode)
    }
    minusone=(event)=>{
        this.props.deleteProduct(event.target.parentNode.parentNode)
    }
    
    render() {
        const {product}=this.props;
        let path = "http://127.0.0.1:3000/" + product.thumbnail;        
        return (
            <div className="products-container__item">
                <div className="product-id" style={{ display: "none" }}>{product.id}</div>
                <div className="products-container__item-image">
                    <div className="products-container__discount">{product.discount}% OFF </div>
                    <img src={path} className="product-container__item--img" />
                    <div className="products-container__sourced-at">Sourced at {product.sourcedAt}</div></div>
                <div className="products-container__item-name">{product.name}</div>
                <div className="products-container__item-weight">{product.quantity} kg</div>
                <div className="products-container__item-footer">
                    <div className="products-container__price-details">
                        <div className="products-container__discounted-price">₹{discountedPrice(product.price, product.discount)}</div>
                        <div className="products-container__actual-price">₹{product.price}</div>
                    </div>
                    <UpdateButton id={product.id} firstAdd={this.firstAdd} plusone={this.plusone} minusone={this.minusone}/>

                </div>
            </div>
        )
    }

}


export default Product;