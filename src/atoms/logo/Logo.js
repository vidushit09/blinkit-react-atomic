import React from "react";
import { Link } from "react-router-dom";
import "./logo.css";

function Logo() {
  return (
    <Link to="/">
      <div className="navbar__logo display-flex">
        <span className="navbar__logo-yellow">blink</span>
        <span className="navbar__logo-green">it</span>
      </div>
    </Link>
  );
}

export default Logo;
