import React, { useState, createContext } from "react";
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
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";

export const AuthContext = createContext();

const ProtectedRoute = ({ element }) => {
  const { loggedIn } = React.useContext(AuthContext);
  return loggedIn ? element : <Navigate to="/login" />;
};

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
    element: <ProtectedRoute element={<UPLOAD />} />,
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

function MainApp() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  const login = (token) => {
    setLoggedIn(true);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById("root")
);
