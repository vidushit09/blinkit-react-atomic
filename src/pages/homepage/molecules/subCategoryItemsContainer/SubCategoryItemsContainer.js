import React from "react";
import ProductsContainerItemsHeader from "../../atoms/productsContainerItemsHeader";
import ProductsContainerItems from "../../molecules/productsContainerItems";
import { sortByHelper } from "../../helpers/sortByHelper";
import PropTypes from "prop-types";

class SubCategoryItemsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
    };
  }
  sortBy = (event) => {
    let currProducts = sortByHelper(event, this.props.products);
    this.setState({
      products: currProducts,
    });
  };
  render() {
    const { products, addProduct, deleteProduct } = this.props;
    return (
      <div className="products-container__items-container">
        <ProductsContainerItemsHeader sortBy={this.sortBy} />
        <ProductsContainerItems
          products={products}
          addProduct={addProduct}
          deleteProduct={deleteProduct}
        />
      </div>
    );
  }
}
SubCategoryItemsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};
SubCategoryItemsContainer.defaultProps = {
  product: [],
};

export default SubCategoryItemsContainer;
