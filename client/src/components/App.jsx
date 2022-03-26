import React, { useState, useContext } from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Login from "./Login";
import Home from "./Home";
import Events from "./Events";
import EventForm from "./EventForm";
import Services from "./Services";
import ServiceForm from "./ServiceForm";
import { Routes, Route, Navigate } from "react-router-dom";
import { authContext } from "./providers/AuthProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import EventsProvider from "./hooks/EventsProvider";

function App() {
  const [currentFilter, setCurrentFilter] = useState("");

  return (
    <div className="App">
      <EventsProvider>
        <Header setCurrentFilter={setCurrentFilter} />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/events"
            element={<Events currentFilter={currentFilter} />}
          />

          <Route
            path="/events/new"
            element={
              <RequireAuth redirectTo="/login">
                <EventForm />
              </RequireAuth>
            }
          />
          {/* <Route path="/create-event" element={<EventForm />} /> */}
          <Route path="/services" element={<Services />} />

          <Route
            path="/services/new"
            element={
              <RequireAuth redirectTo="/login">
                <ServiceForm />
              </RequireAuth>
            }
          />
        </Routes>

        <Footer />
      </EventsProvider>
    </div>
  );
}
function RequireAuth({ children, redirectTo }) {
  const { auth } = useContext(authContext);

  return auth ? children : <Navigate to={redirectTo} />;
}
export default App;
