import React from "react";
import PropTypes from "prop-types";
import styles from "./downloadButton.module.css";

function DownloadButton(props) {
  let path = "http://127.0.0.1:3000/" + props.url;
  return (
    <>
      <button className={styles.download__button}>
        <img src={path} alt="" />
      </button>
    </>
  );
}
DownloadButton.propTypes = {
  url: PropTypes.string,
};
DownloadButton.defaultProps = {
  url: undefined,
};
export default DownloadButton;
