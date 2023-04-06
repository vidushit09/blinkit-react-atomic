import Category from "../atoms/category";
var _ = require('lodash');

function categoryListHelper(categories,categoryClick){
    let list=_.map(categories,(category) => {
      return (
        <Category
          category={category}
          categoryClick={categoryClick}
        />
      );
    })
    return list;
}
export {categoryListHelper};