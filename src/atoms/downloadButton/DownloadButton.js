import React from "react";
import PropTypes from 'prop-types';

function downloadButton(props) {
    let path="http://127.0.0.1:3000/"+props.url;
    return (
        <>
            <button className="footer__download-button">
                <img src={path} alt="" />
            </button>
        </>
        
    )
}
downloadButton.propTypes = {
    url: PropTypes.string
  };


export default downloadButton;