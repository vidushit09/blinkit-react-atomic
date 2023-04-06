import React from "react";
import { Link } from "react-router-dom";
import styles from "./logo.module.css";
import stylesCommon from "../../../../App.module.css";

function Logo() {
  return (
    <Link to="/">
      <div className={`${styles.logo} ${stylesCommon.displayFlex}`}>
        <span className={styles.logoYellow}>blink</span>
        <span className={styles.logoGreen}>it</span>
      </div>
    </Link>
  );
}

export default Logo;
