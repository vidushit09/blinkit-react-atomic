import React from "react";
import {Category} from "../../atoms/category";
import {CategoryMore} from "../../atoms/categoryMore";

function categoriesNavbar(props){
    let list,i=7;
    if(props.categories.length<=7){
        list=props.categories.map((category,index)=> {
            return(
                <Category category={category} key={index} categoryClick={props.categoryClick}/>
            )
            
        });
    }
    else{
            list=props.categories.slice(0,7).map((category,index)=> {
                return(
                    <Category category={category} key={index} categoryClick={props.categoryClick}/>
                )  
            });
           
        
        list.push(<CategoryMore index={i++} categories={props.categories.slice(7,)}  categoryClick={props.categoryClick}/>);
        
    }
    return(
        <ul className="category-list display-flex" id="category-list">
            {list}
        </ul>
    )
}

export default categoriesNavbar;