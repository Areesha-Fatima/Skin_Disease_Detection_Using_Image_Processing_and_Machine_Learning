import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import "./privacy.css";

function PRIVACY() {
  return (
    <>
      <Navbar />
      <div className="privacy-wrapper">
        <div className="privacy-container">
          <div className="privacy-header">
            <span className="privacy-badge">Data Protection</span>
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="privacy-subtitle">
              Your privacy is fundamental to our platform. Learn how we handle
              and protect your data.
            </p>
          </div>

          <section className="privacy-section">
            <h2>
              <span className="section-icon">📌</span> Introduction
            </h2>
            <p>
              Welcome to the Skin Disease Detection platform ("the Website").
              Your privacy and trust are paramount to us. This Privacy Policy
              explains how we collect, process, and protect your information
              when you use our services. By accessing the Website, you agree to
              the collection and use of information in accordance with this
              policy.
            </p>
          </section>

          <section className="privacy-section">
            <h2>
              <span className="section-icon">🔍</span> Information We Collect
            </h2>
            <p>
              <strong>Personal Information:</strong> We do not require personal
              registration details to use the primary analysis tool. However, if
              you contact us directly, we may collect basic communication
              details such as your name and email address.
            </p>
            <p>
              <strong>Image Data:</strong> When you upload an image for skin
              condition analysis, the file is temporarily processed in memory to
              generate visual results and is immediately purged. We do not
              store, archive, or sell your image data.
            </p>
            <p>
              <strong>Usage & Diagnostic Data:</strong> We may collect
              non-identifiable technical data regarding how the service is
              accessed, including browser type, device information, and
              interaction timestamps to optimize platform stability.
            </p>
          </section>

          <section className="privacy-section">
            <h2>
              <span className="section-icon">⚙️</span> Use of Data
            </h2>
            <ul>
              <li>
                <strong>To Provide & Deliver Services:</strong> To process
                uploaded images temporarily and provide automated preliminary
                insights.
              </li>
              <li>
                <strong>To Maintain System Health:</strong> To monitor technical
                performance, optimize platform response times, and prevent
                malicious abuse.
              </li>
              <li>
                <strong>To Communicate:</strong> To respond to support queries
                or user inquiries efficiently.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>
              <span className="section-icon">🗑️</span> Data Retention & Lifespan
            </h2>
            <ul>
              <li>
                <strong>Image Files:</strong> All uploaded images are held
                transiently during active processing and permanently deleted
                immediately after analysis completes.
              </li>
              <li>
                <strong>Technical Logs:</strong> Minimal aggregate usage metrics
                are retained temporarily solely for security auditing and
                performance evaluation.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>
              <span className="section-icon">🔒</span> Security of Data
            </h2>
            <p>
              We implement industry-standard security protocols to safeguard
              data in transit and prevent unauthorized access. While no method
              of internet transmission is 100% immune to vulnerabilities, we
              continuously review and strengthen our security posture to ensure
              maximal data protection.
            </p>
          </section>

          <section className="privacy-section privacy-contact">
            <h2>
              <span className="section-icon">📩</span> Privacy Questions
            </h2>
            <p>
              If you have any questions or concerns regarding this Privacy
              Policy or your data protection rights, please contact our support
              team at:
            </p>
            <ul>
              <li>
                <strong>Email:</strong> support@skindiseasedetection.com
              </li>
              <li>
                <strong>Phone:</strong> +123-456-7890
              </li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PRIVACY;
