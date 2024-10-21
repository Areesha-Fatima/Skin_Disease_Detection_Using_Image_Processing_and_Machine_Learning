import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./signup.css";
import Navbar from "./navbar";
import Footer from "./footer";

function REGISTER() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:8000/api/signup", data);
      console.log(res);

      if (res.data.success) {
        toast.success("Registration successful! Redirecting to login...");
        setTimeout(() => {
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
      <div className="signup-container">
        <center>
          <h2>Start Here for Quick and Easy Skin Disease Detection!</h2>
        </center>
        <div className="abouts">
          The first simple step in your online visit is to upload a picture of
          your skin condition. Our AI will instantly analyze the image and
          provide a preliminary diagnosis along with general precautions.
        </div>
        <div className="abouts">
          No need to schedule an appointment. It's completely free and available
          anytime, anywhere.
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
          <div className="boxsign">
            <div className="signup">SIGN UP</div>

            <div className="input-group">
              <input
                type="text"
                placeholder="Patient Username"
                {...register("username", { required: "Username is required" })}
                className="input-field"
              />
              {errors.username && (
                <p className="error">{errors.username.message}</p>
              )}
            </div>

            <div className="input-group">
              <input
                type="email"
                placeholder="Patient Email"
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
              <input
                type="password"
                placeholder="Patient Password"
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
              Create an Account
            </button>
          </div>

          <div className="signup_link">
            Have an Account? <a href="/login">Login Here</a>
          </div>
        </form>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default REGISTER;
