import React from "react";
import PropTypes from "prop-types";
import "./advertisementCard.css";

function AdvertisementCard(props) {
  const { title, content } = props;
  return (
    <div className="advertisement-card__card display-flex">
      <img
        src="http://127.0.0.1:3000/img/basket.png"
        alt=""
        className="advertisement-card__img"
      ></img>
      <div className="advertisement-card__title">{title}</div>
      <div className="advertisement-card__content">{content}</div>
    </div>
  );
}

AdvertisementCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
AdvertisementCard.defaultProps={
  title:undefined,
  content:undefined
}

export default AdvertisementCard;
