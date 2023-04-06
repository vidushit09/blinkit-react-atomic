import SubCategoryListItem from "../../../atoms/subCategoryListItem";
import lodash from "lodash";

function subCategoryHelper(subCategories, currSubCategory, subCategoryClick) {
  return lodash.map(subCategories, (subCategory, index) => {
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

export { subCategoryHelper };
