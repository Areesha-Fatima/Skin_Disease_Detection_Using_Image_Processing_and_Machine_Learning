import React from "react";
import "../App.css";
import PAT from "../images/PAT.jpg";
import file1 from "../images/file1.jpg";
import model from "../images/model.jpg";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home">
        <img src={PAT} alt="Skin Disease" className="responsive-image" />
      </div>

      <div className="boxhome">
        <div className="edit1">
          <h2>You don't have to.</h2>
          <p>
            Get instant skin disease detection results without waiting for a
            dermatologist appointment.
          </p>
        </div>
      </div>

      <div className="side-image">
        <img src={file1} alt="Side view" className="responsive-image" />
      </div>

      <div className="text-content">
        <div className="detail0">ACCURATE & ACCESSIBLE</div>
        <div className="detail">
          <b>No scheduling. No appointments.</b>
        </div>
        <div className="detail1">
          Instant skin disease detection, wherever and whenever you need it.
        </div>
        <div className="detail2">
          <ul>
            <li>
              Upload a picture and receive AI-powered analysis in seconds.
            </li>
            <li>Get instant results without the need for a doctor's visit.</li>
            <li>
              Use our service anytime for quick and easy skin disease detection.
            </li>
            <li>Receive general precautions based on your analysis.</li>
          </ul>
        </div>
        <div className="edit3">
          <p>
            AI-powered skin disease detection is just as effective, if not more
            so, than traditional doctor visits.
          </p>
        </div>
      </div>

      <div className="side-image1">
        <img src={model} alt="Model view" className="responsive-image" />
      </div>

      <div className="text-content1">
        <button className="btn2">
          <a className="a1" href="/upload">
            Scan Here
          </a>
        </button>
        <div className="detail00">SIMPLE & STRAIGHTFORWARD</div>
        <div className="detail001">
          <b>How it works:</b>
        </div>
        <div className="detail02">
          <ul>
            <li>
              <b>Upload a Picture:</b> Upload a clear image of your skin
              condition.
            </li>
            <li>
              <b>AI Analysis:</b> Our AI-powered system will analyze the image.
            </li>
            <li>
              <b>Get Results:</b> Receive an instant preliminary diagnosis and
              general precautions.
            </li>
          </ul>
        </div>
      </div>

      <div className="boxhome1">
        <div className="edit4">Here to Help.</div>
        <div className="edit5">
          Get instant results and advice from our AI-powered system.
        </div>
      </div>
    </div>
  );
}

export default Home;
