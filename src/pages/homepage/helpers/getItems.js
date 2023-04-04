import data from "../../../data/data.json";
export const getItems=(subCategory,category)=>{
    if(subCategory=="All")
        return data.products.filter(obj=>obj.category==category);
    else
        return data.products.filter(obj=>obj.subCategory==subCategory);
}