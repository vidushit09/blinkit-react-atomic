import React from 'react';
import data from "../../data/data.json";
import TopNavbar from '../../organisms/topNavbar';
import CategoriesNavbar from '../../molecules/categoriesNavbar';
import ProductsContainer from "./organisms/productsContainer";
import AdvertisementContainer from '../../molecules/advertisementContainer';
import Disclaimer from "../../atoms/disclaimer";
import Footer from "../../organisms/footer";
import PropTypes from 'prop-types';



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
Homepage.propTypes={
    category:PropTypes.string,
    currSubCategory:PropTypes.string,
    cartCount:PropTypes.number,
    cartDiscount:PropTypes.number
  }
Homepage.defaultProps={
  category:"Vegetables and Fruits",
  currSubCategory:"All",
  cartCount:0,
  cartDiscount:0
}

export default Homepage;