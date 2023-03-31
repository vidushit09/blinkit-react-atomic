import React from 'react';
import data from "../../data/data.json";
import TopNavbar from '../../organisms/topNavbar';
import CategoriesNavbar from '../../molecules/categoriesNavbar';
import ProductsContainer from "./organisms/productsContainer";
import AdvertisementContainer from '../../molecules/advertisementContainer';
import Disclaimer from "../../atoms/disclaimer";
import Footer from "../../organisms/footer";



class Homepage extends React.Component{
    render(){
        const {category, currSubCategory,cartCount,cartDiscount, categoryClick, subCategoryOnClick, addProduct, deleteProduct, getSubCategory}= this.props;
        return(
        <>
            <TopNavbar cartCount={cartCount} cartDiscount={cartDiscount}/>
            <CategoriesNavbar categories={data.topTabCategoryList} categoryClick={categoryClick} />
            <ProductsContainer category={category} currSubCategory={currSubCategory} subCategoryOnClick={subCategoryOnClick} addProduct={addProduct} deleteProduct={deleteProduct} getSubCategory={getSubCategory}/>
            <AdvertisementContainer />
            <Disclaimer /> 
            <Footer />
        </>)
    }
}

export default Homepage;