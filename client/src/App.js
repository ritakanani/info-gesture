import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Service from "./components/Service";
// import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        {/* <Route path="/" element={<Contact />} /> */}
        <Route path="/services" element={<Service />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
