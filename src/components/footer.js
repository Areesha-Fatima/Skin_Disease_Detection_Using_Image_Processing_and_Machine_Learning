import React from "react";
import img2 from "../images/logo-blue.png";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="icon">
          <Link to="/">
            <img src={img2} alt="Footer Icon" />
          </Link>
        </div>
        <div className="para">
          Instant skin disease detection with AI technology – accessible
          anytime, anywhere.
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="para1">
                Copyright &copy; 2024 All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <a href="/term">Terms Of Use</a>
          <span> | </span>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
