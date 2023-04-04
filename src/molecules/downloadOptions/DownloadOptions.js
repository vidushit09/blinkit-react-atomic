import React from "react";
import DownloadButton from "../../atoms/downloadButton";
import "./downloadOptions.css";

function DownloadOptions() {
    return (
        <div className="footer__download-options display-flex">
            <div className="footer__download-app">Download App</div>
            <DownloadButton url="img/appStore.png"/>
            <DownloadButton url="img/playStore.png" />
        </div>

    )
}

export default DownloadOptions;