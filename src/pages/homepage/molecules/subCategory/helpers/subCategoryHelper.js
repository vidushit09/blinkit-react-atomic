import SubCategoryListItem from "../../../atoms/subCategoryListItem";

function subCategoryHelper(subCategories, currSubCategory, subCategoryClick){
    return subCategories.map((subCategory, index) => {
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