import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { AuthContext } from "../index";
import "./signup.css";

function REGISTER() {
  const { login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const API_URL =
    "https://skin-disease-detection-using-image-cjgi.onrender.com";

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${API_URL}/api/signup`, data);
      if (res.data.success) {
        toast.success("Registration successful! Redirecting to login...");
        setTimeout(() => {
          login(res.data.token);
          navigate("/login");
        }, 2000);
      } else {
        toast.error("Error: " + res.data.error);
      }
    } catch (err) {
      console.error("Registration error: ", err.response);
      toast.error(err.response?.data?.error || "An error occurred");
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup-page-wrapper">
        <div className="signup-container">
          <div className="signup-intro">
            <span className="signup-badge">Get Started Free</span>
            <h2>Create Your Account</h2>
            <p>
              Join our platform for rapid, accessible, and automated skin
              condition assessments anytime, anywhere.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
            <h2 className="signup-title">Sign Up</h2>

            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                {...register("username", { required: "Username is required" })}
                className="input-field"
              />
              {errors.username && (
                <p className="error">{errors.username.message}</p>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
                className="input-field"
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Create a password (min. 6 characters)"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="input-field"
              />
              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
            </div>

            <button className="createbtn" type="submit">
              Create Account
            </button>

            <div className="signup_link">
              Already have an account? <Link to="/login">Login Here</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default REGISTER;
