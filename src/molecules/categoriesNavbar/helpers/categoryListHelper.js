import Category from "../atoms/category";
import lodash from "lodash";

function categoryListHelper(categories, categoryClick) {
  let list = lodash.map(categories, (category) => {
    return <Category category={category} categoryClick={categoryClick} />;
  });
  return list;
}
export { categoryListHelper };
