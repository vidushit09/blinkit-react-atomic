import data from "../data/data.json";
const getSubCategory=(category)=>{
    return data.leftTabCategories.filter(obj=>obj.category==category);
  }
 export {getSubCategory};