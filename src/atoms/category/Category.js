import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./style.css"

function category(props){
    const {category, categoryClick}=props;
    return(
        <Link to="/">
            <li className="category-list__list-item display-flex" onClick={categoryClick}>{category}</li>
        </Link>
    )
}
category.propTypes = {
    category: PropTypes.string
  };

export default category;