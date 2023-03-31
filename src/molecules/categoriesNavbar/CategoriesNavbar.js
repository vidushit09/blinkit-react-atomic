import React from "react";
import Category from "../../atoms/category";
import CategoryMore from "../../atoms/categoryMore";

function categoriesNavbar(props){
    let list,i=7;
    const {categories, categoryClick}=props;
    if(categories.length<=7){
        list=categories.map((category,index)=> {
            return(
                <Category category={category} key={index} categoryClick={categoryClick}/>
            )
            
        });
    }
    else{
            list=categories.slice(0,7).map((category,index)=> {
                return(
                    <Category category={category} key={index} categoryClick={categoryClick}/>
                )  
            });
           
        
        list.push(<CategoryMore index={i++} categories={categories.slice(7,)}  categoryClick={categoryClick}/>);
        
    }
    return(
        <ul className="category-list display-flex" id="category-list">
            {list}
        </ul>
    )
}

export default categoriesNavbar;