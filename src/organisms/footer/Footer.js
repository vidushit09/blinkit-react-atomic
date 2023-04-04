import React from "react";
import Copyright from "../../atoms/copyright";
import DownloadOptions from "../../molecules/downloadOptions";
import "./footer.css";

function Footer() {
  return (
    <div className="footer display-flex">
      <div className="footer__left display-flex">
        <Copyright />
        <DownloadOptions />
      </div>
      <div className="footer__right">
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
