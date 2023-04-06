import data from "../data/data.json";
import lodash from "lodash";

const getSubCategory = (category) => {
  return lodash.get(data, "leftTabCategoryList").filter(
    (obj) => obj.category == category
  );
};
export { getSubCategory };
