import React from "react";
import PropTypes from 'prop-types';
import "./style.css";

function advertisementCards(props){
    const {title,content}= props;
    return(
        <div className="advertisement-cards__card display-flex">
            <img src="http://127.0.0.1:3000/img/basket.png" alt="" className="advertisement-cards__img"></img>
            <div className="advertisement-cards__title">{title}</div>
            <div className="advertisement-cards__content">{content}</div>
        </div>
    )
}

advertisementCards.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
  };

export default advertisementCards;