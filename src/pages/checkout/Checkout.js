import React from 'react';
import data from "../../data/data.json";
import {TopNavbar} from '../../organisms/topNavbar';
import {CategoriesNavbar} from '../../molecules/categoriesNavbar';
import {CheckoutHeader} from './atoms/checkoutHeader';
import {CheckoutSubHeader} from './atoms/checkoutSubHeader';
import {CheckoutItems} from './organisms/checkoutItems';
import {CheckoutFooter} from "./molecules/checkoutFooter";
import {AdvertisementContainer} from '../../molecules/advertisementContainer';
import {Disclaimer} from "../../atoms/disclaimer";
import {Footer} from "../../organisms/footer";

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