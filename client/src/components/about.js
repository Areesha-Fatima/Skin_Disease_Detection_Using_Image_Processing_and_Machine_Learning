import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "./about.css";

function About() {
  return (
    <>
      <Navbar />
      <div className="about-wrapper">
        {/* Header Hero Section */}
        <div className="about-hero">
          <span className="about-badge">About Our Project</span>
          <h1 className="about-title">Pioneering Smart Dermatological Care</h1>
          <p className="about-welcome">
            Empowering individuals with rapid, accessible, and reliable
            preliminary skin health insights through state-of-the-art automated
            technology.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="about-grid">
          {/* Mission */}
          <div className="about-card">
            <div className="card-icon">🎯</div>
            <h2>Our Mission</h2>
            <p>
              To leverage cutting-edge technology to provide a free, easy-to-use
              platform for preliminary skin condition screening and raise global
              awareness about dermatological health.
            </p>
          </div>

          {/* What We Do */}
          <div className="about-card">
            <div className="card-icon">🔬</div>
            <h2>What We Do</h2>
            <p>
              Our intelligent processing engine evaluates uploaded images of
              skin conditions to detect potential abnormalities, returning
              preliminary condition titles and actionable health precautions.
            </p>
          </div>

          {/* Free of Cost */}
          <div className="about-card">
            <div className="card-icon">💡</div>
            <h2>Completely Free</h2>
            <p>
              We believe foundational health information should be universally
              open to everyone without financial barriers or subscription
              paywalls.
            </p>
          </div>

          {/* Security & Commitment */}
          <div className="about-card">
            <div className="card-icon">🛡️</div>
            <h2>Privacy & Security</h2>
            <p>
              Your medical privacy is paramount. Uploaded images are processed
              securely and deleted immediately after review. No personal scan
              data is ever stored or shared.
            </p>
          </div>
        </div>

        {/* How It Works Steps Section */}
        <div className="about-workflow-section">
          <h2>How It Works</h2>
          <div className="workflow-steps-grid">
            <div className="workflow-step-card">
              <span className="step-num">01</span>
              <h3>Upload Picture</h3>
              <p>
                Submit a clear, well-lit photograph of the affected skin area.
              </p>
            </div>
            <div className="workflow-step-card">
              <span className="step-num">02</span>
              <h3>Smart Analysis</h3>
              <p>
                Our intelligent system evaluates visual characteristics in
                seconds.
              </p>
            </div>
            <div className="workflow-step-card">
              <span className="step-num">03</span>
              <h3>Get Results</h3>
              <p>
                Receive preliminary identification and suggested self-care
                steps.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer & Contact Section */}
        <div className="about-info-footer-grid">
          <div className="info-box disclaimer-box">
            <h3>Medical Disclaimer</h3>
            <p>
              This platform provides preliminary informational guidance only and
              does not substitute professional medical diagnosis, advice, or
              treatment. Always consult a qualified healthcare provider.
            </p>
          </div>

          <div className="info-box contact-box">
            <h3>Contact Support</h3>
            <p>Have questions regarding our platform?</p>
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

export default About;
