import React from "react";
import PropTypes from "prop-types";
import "./downloadButton.css";

function DownloadButton(props) {
  let path = "http://127.0.0.1:3000/" + props.url;
  return (
    <>
      <button className="footer__download-button">
        <img src={path} alt="" />
      </button>
    </>
  );
}
DownloadButton.propTypes = {
  url: PropTypes.string,
};
DownloadButton.defaultProps={
  url:undefined
}
export default DownloadButton;
