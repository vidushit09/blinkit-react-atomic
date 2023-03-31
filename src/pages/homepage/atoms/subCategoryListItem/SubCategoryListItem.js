import React  from "react";

function subCategoryListItem(props){
    const {subCategory, currSubCategory,subCategoryOnClick}=props;
    let path= "http://127.0.0.1:3000/"+subCategory.categoryThumbnail;
    return(
        <>
            <li  className={currSubCategory==subCategory.subCategory? "products-container__category--active display-flex" : "products-container__category--inactive display-flex" } onClick={subCategoryOnClick}>
                <div className="products-container__category__category-image">
                    <img src={path} className="products-container__category-image-img" />   
                </div>{subCategory.subCategory}
            </li>
        </>
    )
}


export default subCategoryListItem;