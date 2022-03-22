import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Login from "./Login";

import Home from "./Home";
import Services from "./Services";
import ServiceForm from "./ServiceForm";

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/new" element={<ServiceForm />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
