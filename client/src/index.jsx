import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./components/App";
import AuthProvider from './components/providers/AuthProvider';
import EventsProvider from './components/hooks/EventsProvider';

ReactDOM.render(
  
  <BrowserRouter>
  <AuthProvider>     
   <EventsProvider> 
    <App />    
   </EventsProvider> 
  </AuthProvider>
  </BrowserRouter>, 
  document.getElementById("root")
);