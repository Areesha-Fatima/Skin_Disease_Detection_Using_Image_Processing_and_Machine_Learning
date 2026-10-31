import React from "react";
import "./result.css";

function RESULT({
  result = "Condition Analyzed",
  symptoms = [],
  remedies = [],
}) {
  return (
    <div className="result-inline-wrapper">
      <div className="result-header-section">
        <span className="result-badge">Analysis Completed</span>
        <h2 className="result-header">Your Diagnostic Report Is Ready</h2>
        <p className="result-subtitle">
          Review your preliminary identification, associated symptoms, and
          recommended care steps below.
        </p>
      </div>

      <div className="result-content">
        {/* Diagnosis Summary Card */}
        <div className="diagnosis-card">
          <span className="card-label">Identified Condition</span>
          <h3 className="result-diagnosis-title">{result}</h3>
        </div>

        {/* Symptoms Section */}
        {symptoms && symptoms.length > 0 && (
          <div className="result-section">
            <h4 className="symptoms-title">
              <span className="section-icon">⚠️</span> Associated Symptoms
            </h4>
            <ul className="symptoms-list">
              {symptoms.map((symptom, index) => (
                <li key={index} className="symptom-item">
                  {symptom}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Recommended Care Section */}
        {remedies && remedies.length > 0 && (
          <div className="result-section">
            <h4 className="remedies-title">
              <span className="section-icon">🩹</span> Recommended Care &
              Remedies
            </h4>
            <ul className="remedies-list">
              {remedies.map((remedy, index) => (
                <li key={index} className="remedy-item">
                  {remedy}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default RESULT;
