import React from "react";
import { getItems } from "../../helpers/getItems";
import {SubCategory} from "../../molecules/subCategory";
import {SubCategoryItemsContainer} from "../../molecules/subCategoryItemsContainer";


class ProductsContainer extends React.Component{
    constructor(props){
        super(props);
        
        this.state=({
            currSubCategory: props.currSubCategory,
            category: props.category
        })
        
    }
   

    render(){
        return(
            <div className="products-container">
                <SubCategory currSubCategory={this.props.currSubCategory} subCategories={this.props.getSubCategory(this.props.category)} subCategoryOnClick={this.props.subCategoryOnClick}/>
                <SubCategoryItemsContainer products={getItems(this.props.currSubCategory,this.props.category)} cart={this.props.cart}  addProduct={this.props.addProduct} deleteProduct={this.props.deleteProduct} /> 
            </div> 
        )
    }
}
export default ProductsContainer;