import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
