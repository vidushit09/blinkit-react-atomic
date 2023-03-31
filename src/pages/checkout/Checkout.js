import React from 'react';
import data from "../../data/data.json";
import TopNavbar from '../../organisms/topNavbar';
import CategoriesNavbar from '../../molecules/categoriesNavbar';
import CheckoutHeader from './atoms/checkoutHeader';
import CheckoutSubHeader from './atoms/checkoutSubHeader';
import CheckoutItems from './organisms/checkoutItems';
import CheckoutFooter   from "./molecules/checkoutFooter";
import AdvertisementContainer from '../../molecules/advertisementContainer';
import Disclaimer from "../../atoms/disclaimer";
import Footer from "../../organisms/footer";

class Checkout extends React.Component{
    render(){
        const {category, cartCount,cartDiscount,cartOriginal, categoryClick, addProduct, deleteProduct}= this.props;
        return(
        <>
            <TopNavbar cartCount={cartCount} cartDiscount={cartDiscount}/>
            <CategoriesNavbar categories={data.topTabCategoryList} categoryClick={categoryClick} />
            <div className="checkout">
                <CheckoutHeader />
                <CheckoutSubHeader cartCount={cartCount}/>
                <CheckoutItems  addProduct={addProduct} deleteProduct={deleteProduct}/>
                <CheckoutFooter  cartOriginal={cartOriginal} cartDiscount={cartDiscount}  cartCount={cartCount}/>
            </div>
            <AdvertisementContainer />
            <Disclaimer /> 
            <Footer />
        </>)
    }
}

export default Checkout;