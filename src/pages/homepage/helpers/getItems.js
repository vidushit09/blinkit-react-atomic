import data from "../../../data/data.json";
var _ = require("lodash");

export const getItems=(subCategory,category)=>{
    if(subCategory=="All")
        return _.get(data,'products').filter(obj=>obj.category==category);
    else
        return _.get(data,'products').filter(obj=>obj.subCategory==subCategory);
}