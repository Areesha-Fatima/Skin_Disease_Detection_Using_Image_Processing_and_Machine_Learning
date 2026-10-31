import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Added for modern popups
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import Footer from "./footer";
import Navbar from "./navbar";
import RESULT from "./result";
import first from "../images/first.png";
import sec from "../images/sec.png";
import instruction from "../images/instruction.png";
import "./upload.css";

function UPLOAD() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPrediction(null);
      setError(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (image) {
      try {
        const formData = new FormData();
        formData.append("file", image);

        const response = await fetch("http://127.0.0.1:8000/predict", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Error in prediction API");
        }

        const data = await response.json();
        setPrediction(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError(
          "Failed to get prediction. Please ensure the backend server is running.",
        );
        setPrediction(null);
      }
    } else {
      // Replaced old browser alert with modern toast popup!
      toast.warn("Please select an image before submitting.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPrediction(null);
    document.getElementById("file-upload").value = "";
  };

  const getFormattedConfidence = (conf) => {
    if (!conf) return "";
    const num = parseFloat(conf);
    if (!isNaN(num)) {
      return num <= 1 ? `${(num * 100).toFixed(1)}%` : `${num.toFixed(1)}%`;
    }
    return conf;
  };

  return (
    <>
      <Navbar />
      <div className="upload-page-wrapper">
        {/* Hero Header */}
        <div className="upload-hero">
          <span className="upload-badge">AI Diagnostic Scan</span>
          <h1 className="upload-title">Identify Your Skin Condition</h1>
          <p className="upload-subtitle">
            Upload a clear photo to instantly receive automated insights and
            guidance.
          </p>
        </div>

        {/* Step 1 Overview */}
        <div className="upload-step-card">
          <div className="step-image-wrapper">
            <img src={first} alt="First step guide" />
          </div>
          <div className="step-content">
            <span className="step-number-tag">Step 01</span>
            <blockquote>"It’s as simple as uploading a photo."</blockquote>
            <p>
              Follow our photography guidelines below to capture a clear,
              high-quality image of the affected area.
            </p>
          </div>
        </div>

        {/* Instructions Section */}
        <div className="instructions-card">
          <div className="instructions-header-centered">
            <div className="instruction-img-centered">
              <img src={instruction} alt="Instruction visual guide" />
            </div>
            <h3>Photography Guidelines for Best Results</h3>
            <p>
              To ensure the most accurate automated assessment, please adhere to
              these simple tips:
            </p>
          </div>
          <ul className="instruction-grid-list">
            <li>
              <span>☀️</span> Use natural ambient light to avoid harsh shadows
              and glare.
            </li>
            <li>
              <span>🎯</span> Ensure the area of interest is perfectly in focus.
            </li>
            <li>
              <span>📏</span> Capture the image from an optimal distance showing
              context.
            </li>
            <li>
              <span>🚫</span> Avoid applying filters or editing the photo.
            </li>
            <li>
              <span>✨</span> Keep the target skin clean and dry before
              scanning.
            </li>
          </ul>
        </div>

        {/* Step 2 Overview */}
        <div className="upload-step-card reverse-layout">
          <div className="step-content">
            <span className="step-number-tag">Step 02</span>
            <blockquote>
              "We’ll assess the photo and suggest effective care."
            </blockquote>
            <p>
              Get instant answers and recommendations tailored to supporting
              your skin health.
            </p>
          </div>
          <div className="step-image-wrapper">
            <img src={sec} alt="Second step guide" />
          </div>
        </div>

        {/* Main Upload Terminal */}
        <div className="upload-console">
          <form
            id="upload-form"
            onSubmit={handleSubmit}
            className="upload-form-box"
          >
            <label htmlFor="file-upload" className="upload-btn-custom">
              📁 Choose Image from Computer
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />

            {image && (
              <p className="selected-filename">
                Selected: <strong>{image.name}</strong>
              </p>
            )}

            <button type="submit" className="submit-btn-custom">
              Analyze Image Now
            </button>
          </form>

          {/* Image Preview Area */}
          {image && (
            <div className="preview-container">
              <h3>Image Preview</h3>
              <div className="preview-img-box">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Uploaded Preview"
                  className="uploaded-image"
                />
              </div>
              <button className="remove-button" onClick={handleRemoveImage}>
                Remove Image
              </button>
            </div>
          )}

          {/* Render Modern RESULT Component */}
          {prediction && (
            <div style={{ width: "100%", marginTop: "20px" }}>
              <RESULT
                result={`${prediction.disease_name} (Confidence: ${getFormattedConfidence(prediction.confidence)})`}
                symptoms={
                  prediction.symptoms || [
                    "Please consult a certified dermatologist for professional symptom evaluation.",
                  ]
                }
                remedies={
                  prediction.recommendation
                    ? [prediction.recommendation]
                    : ["Keep the area clean, dry, and avoid irritation."]
                }
              />
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="error-message-box">
              <p>⚠️ {error}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
      {/* Required for toast notifications to render */}
      <ToastContainer />
    </>
  );
}

export default UPLOAD;
