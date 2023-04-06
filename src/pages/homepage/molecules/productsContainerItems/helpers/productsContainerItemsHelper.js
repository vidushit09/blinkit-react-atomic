import Product from "../../product/Product";
var _ = require('lodash');

function productsContainerItemsHelper(products){
    return _.map(products,(product) => {
        return (
          <Product
            product={product}
          />
        );
      });
}
export {productsContainerItemsHelper}