import React from "react";
import { Link } from "react-router-dom";

function category(props){
    const {category, categoryClick}=props;
    return(
        <Link to="/">
            <li className="category-list__list-item display-flex" onClick={categoryClick}>{category}</li>
        </Link>
    )
}

export default category;