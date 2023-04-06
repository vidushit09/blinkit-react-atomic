import React from "react";
import DownloadButton from "../../atoms/downloadButton";
import styles from "./downloadOptions.module.css";
import stylesCommon from "../../App.module.css";

function DownloadOptions() {
    return (
        <div className={stylesCommon.displayFlex}>
            <div className={styles.downloadApp}>Download App</div>
            <DownloadButton url="img/appStore.png"/>
            <DownloadButton url="img/playStore.png" />
        </div>

    )
}

export default DownloadOptions;