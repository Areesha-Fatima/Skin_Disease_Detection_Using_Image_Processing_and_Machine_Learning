import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import PAT from "../images/PAT.jpg";
import file1 from "../images/file1.jpg";
import model from "../images/model.jpg";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Banner with Animated Slide Overlay */}
      <section className="hero-section">
        <div className="hero-image-wrapper">
          <img
            src={PAT}
            alt="Skin Condition Detection Banner"
            className="hero-image"
          />
          <div className="hero-overlay">
            <h1 className="hero-title">Instant AI-Powered Skin Analysis</h1>
            <p className="hero-subtitle">
              Get immediate insights and preliminary skin condition detection
              without waiting for a dermatologist appointment.
            </p>
            <div className="hero-actions">
              <Link to="/upload" className="primary-btn">
                Scan Your Skin Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <span className="badge">Accurate & Accessible</span>
          <h2>No Scheduling. No Waiting Rooms.</h2>
          <p className="section-description">
            Instant skin condition analysis, wherever and whenever you need it.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-image-card">
            <img
              src={file1}
              alt="Professional Dermatology Analysis"
              className="feature-img"
            />
          </div>

          <div className="feature-content-card">
            <ul className="feature-list">
              <li>
                <div className="feature-icon">⚡</div>
                <div>
                  <strong>Instant AI Evaluation:</strong> Upload a picture and
                  receive intelligent automated assessment in seconds.
                </div>
              </li>
              <li>
                <div className="feature-icon">🩺</div>
                <div>
                  <strong>No Appointment Needed:</strong> Get immediate
                  preliminary feedback without taking time off or waiting days.
                </div>
              </li>
              <li>
                <div className="feature-icon">🌐</div>
                <div>
                  <strong>24/7 Accessibility:</strong> Use our diagnostic
                  scanner anytime, anywhere, on any device.
                </div>
              </li>
              <li>
                <div className="feature-icon">🛡️</div>
                <div>
                  <strong>Actionable Precautions:</strong> Receive tailored
                  general health precautions and guidance based on your
                  analysis.
                </div>
              </li>
            </ul>

            {/*  <div className="info-quote-box">
              <p>
                💡{" "}
                <em>
                  Advanced visual processing technology assists in early
                  screening, providing reliable supplementary guidance alongside
                  professional care.
                </em>
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="workflow-section">
        <div className="section-header">
          <span className="badge">Simple & Straightforward</span>
          <h2>How It Works</h2>
        </div>

        <div className="workflow-grid">
          <div className="workflow-steps">
            <div className="step-card">
              <span className="step-number">01</span>
              <div>
                <h3>Upload a Picture</h3>
                <p>
                  Upload a clear, well-lit image of the affected skin condition.
                </p>
              </div>
            </div>

            <div className="step-card">
              <span className="step-number">02</span>
              <div>
                <h3>Automated Analysis</h3>
                <p>
                  Our intelligent system rapidly reviews visual characteristics.
                </p>
              </div>
            </div>

            <div className="step-card">
              <span className="step-number">03</span>
              <div>
                <h3>Receive Instant Insights</h3>
                <p>
                  Get immediate condition identification along with recommended
                  care precautions.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "12px" }}>
              <Link to="/upload" className="primary-btn">
                Start Free Scan
              </Link>
            </div>
          </div>

          <div className="workflow-image-card">
            <img
              src={model}
              alt="Demonstrating skin scan process"
              className="workflow-img"
            />
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="cta-banner">
        <div className="cta-banner-content">
          <h2>Here to Help You Prioritize Your Skin Health</h2>
          <p>
            Get rapid, reliable guidance from our state-of-the-art AI
            technology.
          </p>
          <Link to="/upload" className="secondary-btn">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
