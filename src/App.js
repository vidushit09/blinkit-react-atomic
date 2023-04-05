import React from "react";
import "./App.css";
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
      cartItems: new Map(),
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
    let obj;
    let tempCartItems = this.state.cartItems;

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
    this.setState({
      cartItems: tempCartItems,
    });
  };

  deleteProduct = (product) => {
    let deleteProduct = this.state.cartItems.get(product.id);
    let tempCartItems;
    if (deleteProduct["quantity"] == 1) {
      tempCartItems = this.state.cartItems;
      tempCartItems.delete(product.id);
    } else {
      tempCartItems = this.state.cartItems;
      let quantity = Number(tempCartItems.get(product.id)["quantity"]) - 1;
      tempCartItems.get(product.id)["quantity"] = quantity;
    }
    this.setState({
      cartItems: tempCartItems,
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
              cartItems={this.state.cartItems}
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
              cartItems={this.state.cartItems}
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
