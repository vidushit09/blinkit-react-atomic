import data from "../../../data/data.json";
import lodash from "lodash";

export const getItems = (subCategory, category) => {
  if (subCategory == "All")
    return lodash.get(data, "products").filter((obj) => obj.category == category);
  else
    return lodash.get(data, "products").filter(
      (obj) => obj.subCategory == subCategory
    );
};
