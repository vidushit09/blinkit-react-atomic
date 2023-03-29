import React from 'react';
import data from "../../data/data.json";
import TopNavbar from '../../organisms/TopNavbar';
import CategoriesNavbar from '../../molecules/CategoriesNavbar';
import CheckoutHeader from './atoms/CheckoutHeader';
import CheckoutSubHeader from './atoms/CheckoutSubHeader';
import CheckoutItems from './organisms/CheckoutItems';
import CheckoutFooter from "./molecules/CheckoutFooter";
import AdvertisementContainer from '../../molecules/AdvertisementsContainer';
import Disclaimer from "../../atoms/Disclaimer";
import Footer from "../../organisms/Footer";

class Checkout extends React.Component{
    render(){
        return(
        <>
            <TopNavbar cartCount={this.props.cartCount} cartDiscount={this.props.cartDiscount}/>
            <CategoriesNavbar categories={data.topTabCategoryList} categoryClick={this.props.categoryClick} />
            <div className="checkout">
                <CheckoutHeader />
                <CheckoutSubHeader cartCount={this.props.cartCount}/>
                <CheckoutItems  addProduct={this.props.addProduct} deleteProduct={this.props.deleteProduct}/>
                <CheckoutFooter  cartOriginal={this.props.cartOriginal} cartDiscount={this.props.cartDiscount}  cartCount={this.props.cartCount}/>
            </div>
            <AdvertisementContainer />
            <Disclaimer />
            <Footer />
        </>)
    }
}

export default Checkout;