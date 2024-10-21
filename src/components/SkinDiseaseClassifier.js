import React, { useState } from "react";
import axios from "axios";

const SkinDiseaseClassifier = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setError(null);
  };

  const resizeImage = (file, width, height) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);
          canvas.toBlob((blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error("Image resizing failed"));
            }
          }, file.type);
        };
        img.src = event.target.result;
      };
      reader.onerror = () => reject(new Error("File reading failed"));
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setError("Please select an image file");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const resizedImageBlob = await resizeImage(selectedFile, 224, 224);

      const formData = new FormData();
      formData.append("file", resizedImageBlob, selectedFile.name);

      const response = await axios.post(
        "http://localhost:8000/predict/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setPrediction(response.data);
      setSelectedFile(null);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "An error occurred while processing the image"
      );
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-4">Skin Disease Classifier</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          className="mb-2 w-full p-2 border rounded"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isLoading ? "Processing..." : "Classify Image"}
        </button>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {prediction && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Prediction Results:</h2>
          <p>
            <strong>Disease:</strong> {prediction.disease_name}
          </p>
          <p>
            <strong>Confidence:</strong>{" "}
            {(prediction.confidence * 100).toFixed(2)}%
          </p>
          <p>
            <strong>Recommendation:</strong> {prediction.recommendation}
          </p>
          {prediction.resized_image_url && (
            <img
              src={prediction.resized_image_url}
              alt="Resized Image"
              className="mt-4 max-w-full h-auto rounded"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SkinDiseaseClassifier;
