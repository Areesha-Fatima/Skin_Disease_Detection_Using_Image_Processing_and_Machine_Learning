import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Navbar from "./navbar";
import Footer from "./footer";

const LOGIN = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  axios.defaults.withCredentials = true;

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email: data.email,
        password: data.password,
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
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
      <div className="login-container">
        <div className="login-intro">
          <h2>Welcome Back!</h2>
          <p>
            Please log in to access your account and benefit from our AI-powered
            skin disease detection service. It's quick, easy, and completely
            free. If you don't have an account yet, you can create one in just a
            few minutes.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <h2 className="login-title">LOGIN</h2>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Patient Email"
              {...register("email", { required: "Email is required" })}
              className="input-field"
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Patient Password"
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
            <a href="/forgot-password">Forgot your password?</a>
          </div>

          <div className="signup_link">
            Don't have an account? <a href="/signup">Create an Account</a>
          </div>
        </form>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default LOGIN;
