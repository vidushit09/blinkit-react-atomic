import React from "react";
import PropTypes from "prop-types";
import styles from "./advertisementCard.module.css";
import stylesCommon from "../../../../App.module.css";

function AdvertisementCard(props) {
  const { title, content } = props;
  return (
    <div className={`${styles.card} ${stylesCommon.displayFlex}`}>
      <img
        src="http://127.0.0.1:3000/img/basket.png"
        alt=""
        className={styles.img}
      ></img>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
}

AdvertisementCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
AdvertisementCard.defaultProps = {
  title: undefined,
  content: undefined,
};

export default AdvertisementCard;
