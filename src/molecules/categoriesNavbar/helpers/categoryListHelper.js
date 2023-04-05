import Category from "../atoms/category";

function categoryListHelper(categories,categoryClick){
    let list= categories.map((category, index) => {
        return (
          <Category
            category={category}
            categoryClick={categoryClick}
          />
        );
      });
      return list;
}
export {categoryListHelper};