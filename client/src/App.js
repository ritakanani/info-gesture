import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Service from './components/Service';
import ServiceForm from './components/ServiceForm';
import Home from './components/Home';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/create-service" element={<ServiceForm />} />
      </Routes>
    
      
     
      <Footer />
    </div>
  );
}

export default App;
