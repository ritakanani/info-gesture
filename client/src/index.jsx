import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./components/App";
import AuthProvider from './components/providers/AuthProvider';

ReactDOM.render(
  
  <BrowserRouter>
  <AuthProvider>      
    <App />    
  </AuthProvider>
  </BrowserRouter>, 
  document.getElementById("root")
);
