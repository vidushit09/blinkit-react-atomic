import data from "../data/data.json";
var _ = require("lodash");

const getSubCategory = (category) => {
  return _.get(data, "leftTabCategoryList").filter(
    (obj) => obj.category == category
  );
};
export { getSubCategory };
