import React from "react";
import Copyright from "./atoms/copyright";
import DownloadOptions from "./molecules/downloadOptions";
import styles from "./footer.module.css";
import stylesCommon from "../../App.module.css";

function Footer() {
  return (
    <div className={`${styles.footer} ${stylesCommon.displayFlex}`}>
      <div className={`${styles.left} ${stylesCommon.displayFlex}`}>
        <Copyright />
        <DownloadOptions />
      </div>
      <div className={styles.right}>
        <button>
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </button>
        <button>
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </button>
        <button>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </button>
        <button>
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default Footer;
