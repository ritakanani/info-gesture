import React from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { authContext } from "./providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./EventForm.scss";

const EventForm = () => {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const { auth } = useContext(authContext);
  let navigate = useNavigate();

  useEffect(() => {
    console.log("navigate", navigate, auth);
    if (!auth) {
      navigate("/");
    }
  }, []);

  const submitForm = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/create-event/new", {
        title,
        topic,
        description,
        location,
        date,
        time,
      })
      .then((res) => {
        console.log("SUCCESS", res);
        navigate("/events");
      })
      .catch((error) => {
        console.log(`Something went wrong : ${error.message}`);
      });
  };

  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Form
          className="event-form"
          // action="/api/create-event/new"
          // method="post"
        >
          <Form.Group className="mb-3" controlId="evnts-title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="event_title"
              type="text"
              placeholder="User Name"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="events-types">
            <Form.Label>What type of event are you creating?</Form.Label>
            <Form.Select
              name="topic"
              defaultValue="Choose..."
              onChange={(e) => setTopic(e.target.value)}
            >
              <option>Choose...</option>
              <option>Online</option>
              <option>Webinar</option>
              <option>Art & Crafts</option>
              <option>Job fair</option>
              <option>Yoga</option>
              <option>Family Gathering</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              name="event_description"
              as="textarea"
              rows={3}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="events-location">
            <Form.Label>What type of event are you creating?</Form.Label>
            <Form.Select
              name="event_location"
              defaultValue="Choose..."
              onChange={(e) => setLocation(e.target.value)}
            >
              <option>Choose...</option>
              <option>Toronto</option>
              <option>York</option>
              <option>Etobicoke</option>
              <option>Scarborough</option>
              <option>North York</option>
              <option>Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="event-date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="event-time">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              name="time"
              onChange={(e) => setTime(e.target.value)}
            />
          </Form.Group>

          <Button variant="secondary" type="submit" onClick={submitForm}>
            Create Event
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EventForm;