import React from 'react';
import "./App.css";
import { getSubCategory } from './helpers/getSubCategory';
import {HOMEPAGE_CONSTANTS}  from "./constants.general";
import { Route, Routes } from "react-router";
import Homepage from './pages/homepage/Homepage';
import Checkout from './pages/checkout/Checkout';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      category: HOMEPAGE_CONSTANTS.DEFAULT_CATEGORY,
      currSubCategory:HOMEPAGE_CONSTANTS.DEFAULT_SUB_CATEGORY,
      cartCount: 0,
      cartOriginal: 0,
      cartDiscount: 0
    };
  }
  categoryClick=(event)=>{
    this.setState({
      category: event.target.innerText,
      currSubCategory: "All"  
    });

  }
  subCategoryOnClick=(event)=>{
    this.setState({
        currSubCategory: event.target.innerText
      })
  }
  addProduct=(parentNode)=>{
    let productId=parentNode.parentNode.getElementsByClassName("product-id")[0].innerText;
    let obj, tempCartDiscount, tempCartOriginal;
    if(window.localStorage.getItem(productId)){
      obj = JSON.parse(window.localStorage.getItem(productId));
      let count=Number(obj.quantity);
      obj.quantity=count+1;
      tempCartOriginal=(Number(this.state.cartOriginal)+obj.originalPrice).toFixed(2);
      tempCartDiscount=(Number(this.state.cartDiscount)+obj.discountedPrice).toFixed(2);
    }
    else{
      const discountedPrice = Number(parentNode.getElementsByClassName("products-container__discounted-price")[0].innerText.slice(1));
      const originalPrice= Number(parentNode.getElementsByClassName("products-container__actual-price ")[0].innerText.slice(1));
      obj = {
          name: parentNode.parentNode.getElementsByClassName("products-container__item-name")[0].innerText,
          discountedPrice: discountedPrice,
          originalPrice: originalPrice,
          quantity: 1
      }
      tempCartOriginal=(Number(this.state.cartOriginal)+Number(originalPrice)).toFixed(2);
      tempCartDiscount=(Number(this.state.cartDiscount)+Number(discountedPrice)).toFixed(2);
      
    }
    this.setState({
      cartCount: this.state.cartCount+1,
      cartOriginal: tempCartOriginal,
      cartDiscount: tempCartDiscount
    })
    window.localStorage.setItem(productId, JSON.stringify(obj));
  }

  deleteProduct=(parentNode)=>{
    let productId=parentNode.parentNode.getElementsByClassName("product-id")[0].innerText;
    let obj=JSON.parse(window.localStorage.getItem(productId));
    let count=Number(obj.quantity);
    if(count==1){ 
      window.localStorage.removeItem(productId);
    }
    else{
      obj.quantity=count-1;
      window.localStorage.setItem(productId,JSON.stringify(obj));
    }
    let tempCartOriginal=(Number(this.state.cartOriginal)-Number(obj.originalPrice)).toFixed(2);
    let tempCartDiscount=(Number(this.state.cartDiscount)-Number(obj.discountedPrice)).toFixed(2);
    this.setState({
      cartCount: this.state.cartCount-1,
      cartOriginal: tempCartOriginal,
      cartDiscount: tempCartDiscount
    })
  }
  

  
  render() {
    return (
      <>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage category={this.state.category} currSubCategory={this.state.currSubCategory} cartCount={this.state.cartCount} cartDiscount={this.state.cartDiscount}
                categoryClick={this.categoryClick} subCategoryOnClick={this.subCategoryOnClick} addProduct={this.addProduct} deleteProduct={this.deleteProduct} getSubCategory={getSubCategory}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout cartCount={this.state.cartCount} cartDiscount={this.state.cartDiscount} cartOriginal={this.state.cartOriginal}
                categoryClick={this.categoryClick} addProduct={this.addProduct} deleteProduct={this.deleteProduct}
              />
            }
          />
        </Routes>
      </>
    )
  }
}



export default App;