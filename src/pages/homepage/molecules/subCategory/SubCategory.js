import React from "react";
import SubCategoryListItem from "../../atoms/subCategoryListItem";
import "./style.css";

class subCategory extends React.Component{

    render(){
        const {currSubCategory,subCategories, subCategoryOnClick}=this.props;
        let list= subCategories.map((subCategory,index)=>{
            return(
                <SubCategoryListItem key={index} subCategory={subCategory} currSubCategory={currSubCategory} subCategoryOnClick={subCategoryOnClick}/>
            )
        })
        let path= "http://127.0.0.1:3000/"+subCategories[0].categoryThumbnail;
        return(
            <ul className="products-container__category" id="products-container__category">
                <li className={currSubCategory=="All"? "products-container__category--active display-flex" : "products-container__category--inactive display-flex" }  onClick={subCategoryOnClick}><div className="products-container__category__category-image"><img src={path} className="products-container__category-image-img"/></div>All</li>
                {list}
            </ul>
        )
    }
}

export default subCategory;