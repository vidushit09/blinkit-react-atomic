import Product from "../../product/Product";
import lodash from "lodash";

function productsContainerItemsHelper(products) {
  return lodash.map(products, (product) => {
    return <Product product={product} />;
  });
}
export { productsContainerItemsHelper };
