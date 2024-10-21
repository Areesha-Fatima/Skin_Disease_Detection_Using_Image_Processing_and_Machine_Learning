import React from "react";
import "../App.js";
import Footer from "./footer";
import Navbar from "./navbar";
import "./privacy.css";

function PRIVACY() {
  return (
    <>
      <Navbar />
      <div className="privacy-container">
        <h1 className="privacy-title">
          <strong>Privacy Policy</strong>
        </h1>

        <section className="privacy-section">
          <h2>
            <strong>Introduction</strong>
          </h2>
          <p>
            Welcome to the Skin Disease Detector website ("the Website"). Your
            privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your personal information when you use our
            Website. By using the Website, you agree to the collection and use
            of information in accordance with this policy.
          </p>
        </section>

        <section className="privacy-section">
          <h2>
            <strong>Information We Collect</strong>
          </h2>
          <p>
            <strong>Personal Information:</strong> We do not require personal
            information to use the Website. However, if you contact us, we may
            collect information such as your name, email address, and phone
            number.
          </p>
          <p>
            <strong>Image Data:</strong> When you upload an image for disease
            detection, the image is temporarily processed to provide you with a
            diagnosis and is then deleted. We do not store or share your images.
          </p>
          <p>
            <strong>Usage Data:</strong> We may collect information on how the
            Website is accessed and used. This may include your IP address,
            browser type, browser version, the pages of our Website that you
            visit, the time and date of your visit, and other diagnostic data.
          </p>
        </section>

        <section className="privacy-section">
          <h2>
            <strong>Use of Data</strong>
          </h2>
          <ul>
            <li>
              <strong>To Provide and Maintain Our Service:</strong> To process
              the images you upload and provide you with a disease detection
              result.
            </li>
            <li>
              <strong>To Improve Our Website:</strong> To understand how users
              interact with our Website and make improvements.
            </li>
            <li>
              <strong>To Communicate with You:</strong> To respond to your
              inquiries and provide customer support if needed.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>
            <strong>Data Retention</strong>
          </h2>
          <ul>
            <li>
              <strong>Image Data:</strong> Images uploaded to the Website are
              processed for disease detection and then deleted immediately. We
              do not retain any image data.
            </li>
            <li>
              <strong>Usage Data:</strong> We may retain usage data for internal
              analysis purposes. Usage data is generally retained for a shorter
              period, except when this data is used to strengthen the security
              or to improve the functionality of our Website.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>
            <strong>Data Sharing</strong>
          </h2>
          <p>
            We do not share your personal information with third parties, except
            in the following circumstances:
          </p>
          <ul>
            <li>
              <strong>Compliance with Laws:</strong> If required by law or in
              response to valid requests by public authorities.
            </li>
            <li>
              <strong>Protection of Rights:</strong> To protect and defend the
              rights or property of the Website, prevent or investigate possible
              wrongdoing in connection with the Website, and protect the
              personal safety of users of the Website or the public.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>
            <strong>Security of Data</strong>
          </h2>
          <p>
            We are committed to ensuring that your information is secure. We use
            commercially acceptable means to protect your data, but no method of
            transmission over the Internet or method of electronic storage is
            100% secure. While we strive to use commercially acceptable means to
            protect your data, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="privacy-section">
          <h2>
            <strong>Your Data Protection Rights</strong>
          </h2>
          <p>
            Depending on your location, you may have the following data
            protection rights:
          </p>
          <ul>
            <li>
              <strong>The right to access:</strong> You have the right to
              request copies of your personal data.
            </li>
            <li>
              <strong>The right to rectification:</strong> You have the right to
              request that we correct any information you believe is inaccurate
              or complete information you believe.
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default PRIVACY;
