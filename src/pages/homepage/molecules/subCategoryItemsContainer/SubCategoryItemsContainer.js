import React from "react";
import {ProductsContainerItemsHeader} from "../../atoms/productsContainerItemsHeader";
import {ProductsContainerItems} from "../../molecules/productsContainerItems";
import { sortByHelper } from "../../helpers/sortByHelper";

class subCategoryItemsContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            products: this.props.products
        }
    }
    sortBy=(event)=>{
        let currProducts=sortByHelper(event,this.props.products);
        this.setState({
            products: currProducts
        })
    }
    render(){
        return(
            <div className="products-container__items-container">
                <ProductsContainerItemsHeader sortBy={this.sortBy}/>
                <ProductsContainerItems products={this.props.products} cart={this.props.cart}  addProduct={this.props.addProduct} deleteProduct={this.props.deleteProduct}/>
            </div>
                
        )
    }
}

export default subCategoryItemsContainer;