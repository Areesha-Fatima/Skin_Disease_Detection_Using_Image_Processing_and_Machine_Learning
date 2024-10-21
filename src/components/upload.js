import React, { useState } from "react";
import "../App.css";
import Footer from "./footer";
import Navbar from "./navbar";
import first from "../images/first.png";
import sec from "../images/sec.png";
import instruction from "../images/instruction.png";
import "./upload.css";

function UPLOAD() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [heatmapImageUrl, setHeatmapImageUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (image) {
      try {
        const formData = new FormData();
        formData.append("file", image);

        const response = await fetch("http://127.0.0.1:8000/predict/", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Error in prediction API");
        }

        const data = await response.json();
        setPrediction(data);
        setHeatmapImageUrl(data.heatmap_image_url || null);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to get prediction. Please try again.");
        setPrediction(null);
        setHeatmapImageUrl(null);
      }
    } else {
      alert("Please select an image before submitting.");
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPrediction(null);
    setHeatmapImageUrl(null);
    document.getElementById("file-upload").value = "";
  };

  return (
    <div>
      <Navbar />
      <div className="edit01">
        <center>
          Identify Your Skin Condition with Artificial Intelligence
        </center>
      </div>
      <div className="edit02">
        <center>
          Upload a photo to instantly learn what your condition is and how to
          treat it.
        </center>
      </div>

      <div className="boxup">
        <div className="side-image2">
          <center>
            <img src={first} alt="First step" />
          </center>
        </div>
        <div className="text-content2">
          <div className="detailup">
            <b>"It’s as simple as uploading a photo."</b>
          </div>
          <div className="detail1up">
            Follow our instructions to upload a photo of a skin problem.
          </div>
        </div>
      </div>

      <div className="image">
        <img src={instruction} alt="Instruction" />
      </div>

      <div className="boxup1">
        <div className="side-image3">
          <center>
            <img src={sec} alt="Second step" />
          </center>
        </div>
        <div className="text-content2">
          <div className="detailup1">
            <b>
              "We’ll assess the photo to identify potential skin conditions and
              suggest effective remedies."
            </b>
          </div>
          <div className="detail1up1">
            Get instant answers and personalized recommendations for your skin
            health.
          </div>
        </div>
      </div>

      <div className="upload-container">
        <form id="upload-form" onSubmit={handleSubmit}>
          <label htmlFor="file-upload" className="upload-button">
            Choose Image from your Computer
          </label>
          <input id="file-upload" type="file" onChange={handleFileChange} />
          <button type="submit" className="submit-button">
            View Result
          </button>
        </form>

        {image && (
          <div className="image-preview">
            <h1>Image Preview:</h1>
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="uploaded-image"
            />
            <button className="remove-button" onClick={handleRemoveImage}>
              Remove Image
            </button>
          </div>
        )}

        {prediction && (
          <div className="boxpredict">
            <div className="prediction-result">
              <h1>Prediction Result:</h1>
              <p>
                <b>Disease Name : </b>
                {prediction.disease_name}
              </p>
              <p>
                <b>Confidence Score : </b>
                {prediction.confidence}
              </p>
              <p>
                <b>Remedies : </b>
                {prediction.recommendation}
              </p>
              {heatmapImageUrl ? (
                <div className="heatmap-container">
                  <h2>Heatmap Image :</h2>
                  <img
                    src={heatmapImageUrl}
                    alt="Heatmap"
                    className="heatmap-image"
                  />
                </div>
              ) : (
                <p>Heatmap image not available</p>
              )}
            </div>
          </div>
        )}

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default UPLOAD;
