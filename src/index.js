import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TERM from "./components/term";
import Signup from "./components/signup";
import ABOUT from "./components/about";
import PRIVACY from "./components/privacy";
import UPLOAD from "./components/upload";
import LOGIN from "./components/login";
import RESULT from "./components/result";
import SkinDiseaseClassifier from "./components/SkinDiseaseClassifier";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "term",
    element: <TERM />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "about",
    element: <ABOUT />,
  },
  {
    path: "privacy",
    element: <PRIVACY />,
  },
  {
    path: "upload",
    element: <UPLOAD />,
  },
  {
    path: "login",
    element: <LOGIN />,
  },
  {
    path: "result",
    element: (
      <RESULT result={undefined} symptoms={undefined} remedies={undefined} />
    ),
  },
  {
    path: "classifier",
    element: <SkinDiseaseClassifier />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
