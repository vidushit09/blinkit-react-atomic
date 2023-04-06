import data from "../../data/data.json";
import { HOMEPAGE_CONSTANTS } from "../../constants/constants.general";
import {
  CATEGORY_CLICK,
  SUB_CATEGORY_CLICK,
} from "../../constants/productTypes";
import lodash from "lodash";

const productState = {
  categories: lodash.get(data, "topTabCategoryList"),
  category: lodash.get(data, "topTabCategoryList[0]"),
  subCategory: HOMEPAGE_CONSTANTS.DEFAULT_SUB_CATEGORY,
  products: lodash.get(data, "products").filter(
    (obj) => obj.category == lodash.get(data, "topTabCategoryList[0]")
  ),
  subCategories: lodash.get(data, "leftTabCategories").filter(
    (obj) => obj.category == lodash.get(data, "topTabCategoryList[0]")
  ),
};

const productReducer = (state = productState, action) => {
  switch (action.type) {
    case CATEGORY_CLICK: {
      return {
        ...state,
        category: action.category,
        subCategory: HOMEPAGE_CONSTANTS.DEFAULT_SUB_CATEGORY,
        products: lodash.get(data, "products").filter(
          (obj) => obj.category == action.category
        ),
        subCategories: lodash.get(data, "leftTabCategories").filter(
          (obj) => obj.category == action.category
        ),
      };
    }

    case SUB_CATEGORY_CLICK: {
      if (action.subCategory == HOMEPAGE_CONSTANTS.DEFAULT_SUB_CATEGORY) {
        return {
          ...state,
          subCategory: HOMEPAGE_CONSTANTS.DEFAULT_SUB_CATEGORY,
          products: lodash.get(data, "products").filter(
            (obj) => obj.category == state.category
          ),
        };
      } else {
        return {
          ...state,
          subCategory: action.subCategory,
          products: lodash.get(data, "products").filter(
            (obj) => obj.subCategory == action.subCategory
          ),
        };
      }
    }
    default:
      return state;
  }
};

export default productReducer;
