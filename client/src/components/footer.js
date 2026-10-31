import React from "react";
import { Link } from "react-router-dom";
import img2 from "../images/sdd.png";
import "./footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/">
            <img src={img2} alt="Skin AI Logo" className="footer-logo" />
          </Link>
          <p className="footer-tagline">
            Instant skin disease detection powered by advanced AI technology —
            accessible anytime, anywhere.
          </p>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="copyright">
            Copyright &copy; {new Date().getFullYear()} SkinDiseaseDetection.
            All Rights Reserved.
          </p>
          <div className="footer-links">
            <Link to="/term">Terms Of Use</Link>
            <span className="separator">•</span>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
