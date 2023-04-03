import React from "react";
import { getItems } from "../../helpers/getItems";
import SubCategory from "../../molecules/subCategory";
import SubCategoryItemsContainer from "../../molecules/subCategoryItemsContainer";
import "./style.css";

class ProductsContainer extends React.Component{

    render(){
        
        const {category, currSubCategory,subCategoryOnClick, addProduct, deleteProduct, getSubCategory}=this.props;
        return(
            <div className="products-container">
                <SubCategory currSubCategory={currSubCategory} subCategories={getSubCategory(category)} subCategoryOnClick={subCategoryOnClick}/>
                <SubCategoryItemsContainer products={getItems(currSubCategory,category)} addProduct={addProduct} deleteProduct={deleteProduct} /> 
            </div> 
        )
    }
}
export default ProductsContainer;