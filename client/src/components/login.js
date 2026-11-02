import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import { AuthContext } from "../index";
import "./login.css";

const LOGIN = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  axios.defaults.withCredentials = true;
  const API_URL =
    "https://skin-disease-detection-using-image-cjgi.onrender.com";

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/api/login`, {
        email: data.email,
        password: data.password,
      });

      if (response.data.success) {
        login(response.data.token);
        toast.success("Login successful!");
        navigate("/upload");
      } else {
        toast.error("Login failed: " + response.data.error);
      }
    } catch (error) {
      console.error("Login error:", error.response || error);
      toast.error(error.response?.data?.error || "An error occurred");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-page-wrapper">
        <div className="login-container">
          <div className="login-intro">
            <span className="login-badge">Welcome Back</span>
            <h2>Access Your Account</h2>
            <p>
              Log in to access your dashboard and utilize our automated skin
              condition detection platform safely and securely.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <h2 className="login-title">Sign In</h2>

            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                {...register("email", { required: "Email is required" })}
                className="input-field"
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
                className="input-field"
              />
              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </div>

            <button className="loginbtn" type="submit">
              Login
            </button>

            <div className="forgot-password">
              <Link to="/forgot-password">Forgot your password?</Link>
            </div>

            <div className="signup_link">
              Don't have an account? <Link to="/signup">Create an Account</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default LOGIN;
