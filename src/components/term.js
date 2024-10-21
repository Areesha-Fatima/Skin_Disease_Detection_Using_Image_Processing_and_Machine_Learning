import React from "react";
import "../App.js";
import Footer from "./footer";
import Navbar from "./navbar";
import "./term.css";

function TERM() {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <h1>
            <b>
              <center>TERMS OF USE</center>
            </b>
          </h1>
        </div>
      </div>
      <div className="about">
        <h2>
          <b>Acceptance of Terms</b>
        </h2>
      </div>
      <div className="abouts">
        By accessing and using the Skin Disease Detector website ("the
        Website"), you agree to comply with and be bound by these Terms of Use.
        If you do not agree to these terms, please do not use the Website.
      </div>

      <div className="about">
        <h2>
          <b>Use of the Website</b>
        </h2>
      </div>
      <div className="abouts">
        <b>Eligibility:</b> You must be at least 18 years old to use the
        Website. By using the Website, you represent and warrant that you meet
        this requirement.
      </div>
      <div className="abouts">
        <b>License:</b> We grant you a limited, non-exclusive, non-transferable,
        and revocable license to use the Website for personal, non-commercial
        purposes in accordance with these Terms of Use.
      </div>

      <div className="about">
        <h2>
          <b>Free of Cost</b>
        </h2>
      </div>
      <div className="abouts">
        The use of the Website, including the uploading of pictures, detection
        of skin diseases, and provision of disease names and precautions, is
        provided free of charge.
      </div>

      <div className="about">
        <h2>
          <b>Medical Disclaimer</b>
        </h2>
      </div>
      <div className="abouts">
        <ul>
          <li>
            The Website provides information for educational and informational
            purposes only and is not intended as medical advice. The Website
            does not provide diagnoses, treatments, or medical advice.
          </li>
          <li>
            The skin disease detection results are based on machine learning
            algorithms and are not a substitute for professional medical advice,
            diagnosis, or treatment. Always seek the advice of a qualified
            healthcare provider with any questions you may have regarding a
            medical condition.
          </li>
          <li>
            If you think you may have a medical emergency, call your doctor or
            emergency services immediately.
          </li>
        </ul>
      </div>

      <div className="about">
        <h2>
          <b>Intellectual Property</b>
        </h2>
      </div>
      <div className="abouts">
        <ul>
          <li>
            All content on the Website, including text, graphics, images, and
            software, is the property of the Website or its content suppliers
            and is protected by copyright, trademark, and other intellectual
            property laws.
          </li>
          <li>
            You may not reproduce, distribute, modify, or create derivative
            works of any content on the Website without our prior written
            consent.
          </li>
        </ul>
      </div>

      <div className="about">
        <h2>
          <b>Changes to Terms of Use</b>
        </h2>
      </div>
      <div className="abouts">
        We reserve the right to modify these Terms of Use at any time. Any
        changes will be effective immediately upon posting the revised Terms of
        Use on the Website. Your continued use of the Website after the posting
        of the revised Terms of Use constitutes your acceptance of the changes.
      </div>

      <div className="about">
        <h2>
          <b>Indemnification</b>
        </h2>
      </div>
      <div className="abouts">
        You agree to indemnify, defend, and hold harmless the Website and its
        affiliates, officers, directors, employees, agents, and licensors from
        and against any and all claims, liabilities, damages, losses, costs,
        expenses, fees (including reasonable attorneys' fees) that they may
        incur as a result of or arising from your use of the Website, your
        violation of these Terms of Use, or your violation of any rights of
        another.
      </div>

      <div className="about">
        <h2>
          <b>Contact Us</b>
        </h2>
      </div>
      <div className="aboutss">
        If you have any questions about these Terms of Use, please contact us
        at:
        <ul>
          <li>Email: support@skindisease-detector.com</li>
          <li>Phone: +123-456-7890</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default TERM;
