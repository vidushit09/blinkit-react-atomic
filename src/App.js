import React from "react";
import "./App.css";
import { getSubCategory } from "./helpers/getSubCategory";
import { HOMEPAGE_CONSTANTS } from "./constants/constants.general";
import { Route, Routes } from "react-router";
import Homepage from "./pages/homepage";
import Checkout from "./pages/checkout";
import data from "./data/data.json";
import { calculateDiscountedPrice } from "./helpers/calculateDiscountedPrice.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: data.topTabCategoryList[0],
      currSubCategory: HOMEPAGE_CONSTANTS.DEFAULT_SUB_CATEGORY,
      cartCount: 0,
      cartOriginal: 0,
      cartDiscount: 0,
    };
  }
  categoryClick = (event) => {
    this.setState({
      category: event.target.innerText,
      currSubCategory: "All",
    });
  };
  subCategoryOnClick = (event) => {
    this.setState({
      currSubCategory: event.target.innerText,
    });
  };
  addProduct = (product) => {
    let obj, tempCartDiscount, tempCartOriginal;
    if (window.localStorage.getItem(product.id)) {
      obj = JSON.parse(window.localStorage.getItem(product.id));
      let count = Number(obj.quantity);
      obj.quantity = count + 1;
      tempCartOriginal = (
        Number(this.state.cartOriginal) + obj.originalPrice
      ).toFixed(2);
      tempCartDiscount = (
        Number(this.state.cartDiscount) + obj.discountedPrice
      ).toFixed(2);
    } else {
      const discountedPrice = Number(
        calculateDiscountedPrice(product.price, product.discount)
      );
      const originalPrice = Number(product.price);
      obj = {
        id:product.id,
        name: product.name,
        discountedPrice: discountedPrice,
        originalPrice: originalPrice,
        quantity: 1,
      };
      tempCartOriginal = (
        Number(this.state.cartOriginal) + Number(originalPrice)
      ).toFixed(2);
      tempCartDiscount = (
        Number(this.state.cartDiscount) + Number(discountedPrice)
      ).toFixed(2);
    }
    this.setState({
      cartCount: this.state.cartCount + 1,
      cartOriginal: tempCartOriginal,
      cartDiscount: tempCartDiscount,
    });
    window.localStorage.setItem(product.id, JSON.stringify(obj));
  };

  deleteProduct = (product) => {
    let obj = JSON.parse(window.localStorage.getItem(product.id));
    let count = Number(obj.quantity);
    if (count == 1) {
      window.localStorage.removeItem(product.id);
    } else {
      obj.quantity = count - 1;
      window.localStorage.setItem(product.id, JSON.stringify(obj));
    }
    let tempCartOriginal = (
      Number(this.state.cartOriginal) - Number(obj.originalPrice)
    ).toFixed(2);
    let tempCartDiscount = (
      Number(this.state.cartDiscount) - Number(obj.discountedPrice)
    ).toFixed(2);
    this.setState({
      cartCount: this.state.cartCount - 1,
      cartOriginal: tempCartOriginal,
      cartDiscount: tempCartDiscount,
    });
  };

  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              category={this.state.category}
              currSubCategory={this.state.currSubCategory}
              cartCount={this.state.cartCount}
              cartDiscount={this.state.cartDiscount}
              categoryClick={this.categoryClick}
              subCategoryOnClick={this.subCategoryOnClick}
              addProduct={this.addProduct}
              deleteProduct={this.deleteProduct}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              cartCount={this.state.cartCount}
              cartDiscount={this.state.cartDiscount}
              cartOriginal={this.state.cartOriginal}
              categoryClick={this.categoryClick}
              addProduct={this.addProduct}
              deleteProduct={this.deleteProduct}
            />
          }
        />
      </Routes>
    );
  }
}

export default App;
