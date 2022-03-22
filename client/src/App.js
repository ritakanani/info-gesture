import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Service from "./components/Service";
// import Contact from "./components/Contact";
import "./App.css";
=======
import Service from './components/Service';
import ServiceForm from './components/ServiceForm';
import Home from './components/Home';
import './App.scss';

>>>>>>> service-component

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
<<<<<<< HEAD
        {/* <Route path="/" element={<Contact />} /> */}
        <Route path="/services" element={<Service />} />
=======
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/create-service" element={<ServiceForm />} />
>>>>>>> service-component
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
