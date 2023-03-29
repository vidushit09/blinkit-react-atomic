import React from 'react';
import data from "../../data/data.json";
import {TopNavbar} from '../../organisms/topNavbar';
import {CategoriesNavbar} from '../../molecules/categoriesNavbar';
import {ProductsContainer} from "./organisms/productsContainer";
import {AdvertisementContainer} from '../../molecules/advertisementContainer';
import {Disclaimer} from "../../atoms/disclaimer";
import {Footer} from "../../organisms/footer";



class Homepage extends React.Component{
    render(){
        return(
        <>
            <TopNavbar cartCount={this.props.cartCount} cartDiscount={this.props.cartDiscount}/>
            <CategoriesNavbar categories={data.topTabCategoryList} categoryClick={this.props.categoryClick} />
            <ProductsContainer category={this.props.category} currSubCategory={this.props.currSubCategory} subCategoryOnClick={this.props.subCategoryOnClick} addProduct={this.props.addProduct} deleteProduct={this.props.deleteProduct} getSubCategory={this.props.getSubCategory}/>
            <AdvertisementContainer />
            <Disclaimer /> 
            <Footer />
        </>)
    }
}

export default Homepage;