import React from "react";
import ProductsContainerItemsHeader from "../../atoms/productsContainerItemsHeader";
import ProductsContainerItems from "../../molecules/productsContainerItems";
import { sortByHelper } from "../../helpers/sortByHelper";
import PropTypes from "prop-types";

class SubCategoryItemsContainer extends React.Component {
  sortBy = (event) => {
    let currProducts = sortByHelper(event, this.props.products);
    this.setState({
      products: currProducts,
    });
  };
  render() {
    const {products} = this.props;
    return (
      <div>
        <ProductsContainerItemsHeader sortBy={this.sortBy} />
        <ProductsContainerItems
          products={products}
        />
      </div>
    );
  }
}
SubCategoryItemsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};
SubCategoryItemsContainer.defaultProps = {
  products: [],
};

export default SubCategoryItemsContainer;
