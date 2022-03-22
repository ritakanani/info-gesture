import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Login from './components/Login';

import Home from './components/Home';
import Services from './components/Services';
import ServiceForm from './components/ServiceForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import './App.scss';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/create-service" element={<ServiceForm />} />
      </Routes>
    
      
     
      <Footer />
    </div>
  );
}

export default App;
