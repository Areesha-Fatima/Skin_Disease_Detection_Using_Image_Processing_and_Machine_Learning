import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "./about.css";

function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1 className="about-title">ABOUT US</h1>
        <h2 className="about-welcome">
          Welcome to the Skin Disease Detector website!
        </h2>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to leverage advanced technology to provide users with
            a free, easy-to-use tool for preliminary skin disease detection. We
            aim to raise awareness about skin health and help users take the
            necessary precautions to manage their conditions.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Do</h2>
          <p>
            The Skin Disease Detector website allows users to upload pictures of
            their skin conditions. Using cutting-edge machine learning
            algorithms, the website analyzes the uploaded images to detect
            possible skin diseases. The system then provides the name of the
            detected disease along with general precautions that users can take.
          </p>
        </section>

        <section className="about-section">
          <h2>Free of Cost</h2>
          <p>
            Our service is completely free of charge. We believe that access to
            preliminary health information should be available to everyone,
            without any financial barriers.
          </p>
        </section>

        <section className="about-section">
          <h2>How It Works</h2>
          <p>
            <b>Upload a Picture:</b> Users can easily upload an image of their
            skin condition using our user-friendly interface.
          </p>
          <p>
            <b>Disease Detection:</b> Our advanced machine learning model
            analyzes the image to detect potential skin diseases.
          </p>
          <p>
            <b>Receive Results:</b> Users receive the name of the detected
            disease and general precautions to take.
          </p>
        </section>

        <section className="about-section">
          <h2>Disclaimer</h2>
          <p>
            While our tool provides preliminary information, it is not a
            substitute for professional medical advice, diagnosis, or treatment.
            We always recommend consulting with a qualified healthcare provider
            for an accurate diagnosis and appropriate treatment.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Commitment</h2>
          <p>
            We are committed to providing a reliable and secure service. We
            prioritize user privacy and ensure that all uploaded images are
            processed temporarily and deleted immediately after analysis. No
            personal data is stored or shared.
          </p>
        </section>

        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms of Use, please contact
            us at:
          </p>
          <ul>
            <li>Email: support@skindisease-detector.com</li>
            <li>Phone: +123-456-7890</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
