import React from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

import Home from "./Home";
import Services from "./Services";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
