import React from "react";
import "../App.css";
import Footer from "./footer";
import Navbar from "./navbar";
import "./result.css";

function RESULT({ result, symptoms, remedies }) {
  return (
    <div>
      <Navbar />
      <div className="result-container">
        <h2 className="result-header">Your Result Is Ready!</h2>
        <div className="result-content">
          <h3 className="result-title">Diagnosis</h3>
          <p className="result">{result}</p>

          <h3 className="symptoms-title">Symptoms</h3>
          <ul className="symptoms-list">
            {symptoms.map((symptom, index) => (
              <li key={index} className="symptom-item">
                {symptom}
              </li>
            ))}
          </ul>

          <h3 className="remedies-title">Recommended Remedies</h3>
          <ul className="remedies-list">
            {remedies.map((remedy, index) => (
              <li key={index} className="remedy-item">
                {remedy}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RESULT;
