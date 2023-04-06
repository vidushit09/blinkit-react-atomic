import SubCategoryListItem from "../../../atoms/subCategoryListItem";
var _ = require('lodash');

function subCategoryHelper(subCategories, currSubCategory, subCategoryClick){
    return _.map(subCategories,(subCategory, index) => {
        return (
          <SubCategoryListItem
            key={index}
            subCategory={subCategory}
            currSubCategory={currSubCategory}
            subCategoryClick={subCategoryClick}
          />
        );
      });
}

export {subCategoryHelper};