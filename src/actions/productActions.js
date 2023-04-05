import {
    CATEGORY_CLICK,
    SUB_CATEGORY_CLICK
  } from "../constants/productTypes.js"
 
  export const categoryClick = (category) => {
    return {
      type: CATEGORY_CLICK,
      category: category,
    };
  };
  
  export const subCategoryClick = (subCategory) => {
    return {
      type: SUB_CATEGORY_CLICK,
      subCategory: subCategory,
    };
  };
 