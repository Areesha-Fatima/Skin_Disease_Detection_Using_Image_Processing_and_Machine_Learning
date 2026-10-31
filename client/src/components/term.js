import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "./term.css";

function TERM() {
  return (
    <>
      <Navbar />
      <div className="terms-wrapper">
        <div className="terms-container">
          <div className="terms-header">
            <span className="terms-badge">Legal Guidelines</span>
            <h1 className="terms-title">Terms of Use</h1>
            <p className="terms-subtitle">
              Please read these terms carefully before using our platform.
            </p>
          </div>

          <div className="terms-section">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using the Skin Disease Detection website ("the
              Website"), you agree to comply with and be bound by these Terms of
              Use. If you do not agree to these terms, please do not use the
              Website.
            </p>
          </div>

          <div className="terms-section">
            <h2>Use of the Website</h2>
            <p>
              <strong>Eligibility:</strong> You must be at least 18 years old to
              use the Website. By using the Website, you represent and warrant
              that you meet this requirement.
            </p>
            <p>
              <strong>License:</strong> We grant you a limited, non-exclusive,
              non-transferable, and revocable license to use the Website for
              personal, non-commercial purposes in accordance with these Terms
              of Use.
            </p>
          </div>

          <div className="terms-section">
            <h2>Free of Cost</h2>
            <p>
              The use of the Website, including the uploading of pictures,
              condition detection, and provision of insights and precautions, is
              provided free of charge.
            </p>
          </div>

          <div className="terms-section">
            <h2>Medical Disclaimer</h2>
            <ul>
              <li>
                The Website provides information for educational and
                informational purposes only and is not intended as professional
                medical advice, diagnosis, or treatment.
              </li>
              <li>
                Our automated detection results are generated through
                intelligent visual analysis and do not substitute a physical
                examination by a qualified physician. Always seek the advice of
                a qualified healthcare provider with any medical questions.
              </li>
              <li>
                If you think you may have a medical emergency, call your doctor
                or emergency services immediately.
              </li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>Intellectual Property</h2>
            <ul>
              <li>
                All content on the Website, including text, graphics, images,
                and software, is the property of the Website or its content
                suppliers and is protected by copyright and intellectual
                property laws.
              </li>
              <li>
                You may not reproduce, distribute, modify, or create derivative
                works of any content on the Website without our prior written
                consent.
              </li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>Changes to Terms of Use</h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. Any
              changes will be effective immediately upon posting the revised
              Terms of Use on the Website. Your continued use of the Website
              constitutes your acceptance of the changes.
            </p>
          </div>

          <div className="terms-section">
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless the Website and
              its affiliates, officers, directors, employees, agents, and
              licensors from and against any and all claims, liabilities,
              damages, losses, costs, or expenses arising from your use of the
              Website or violation of these Terms of Use.
            </p>
          </div>

          <div className="terms-section contact-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms of Use, please contact
              us at:
            </p>
            <ul>
              <li>
                <strong>Email:</strong> support@skindiseasedetection.com
              </li>
              <li>
                <strong>Phone:</strong> +123-456-7890
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TERM;
