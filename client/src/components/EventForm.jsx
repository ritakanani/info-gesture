import React from "react";
import "./EventForm.scss";
import { Container, Form, Button } from "react-bootstrap";
import { authContext } from "./providers/AuthProvider";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EventForm = () => {
  const { auth } = useContext(authContext);
  let navigate = useNavigate();

  useEffect(() => {
    console.log("navigate", navigate, auth);
    if (!auth) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Form
          className="event-form"
          action="/api/create-event/new"
          method="post"
        >
          <Form.Group className="mb-3" controlId="evnts-title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="event_title"
              type="text"
              placeholder="User Name"
            />
          </Form.Group>

          <Form.Group controlId="events-types">
            <Form.Label>What type of event are you creating?</Form.Label>
            <Form.Select name="topic" defaultValue="Choose...">
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
            <Form.Control name="event_description" as="textarea" rows={3} />
          </Form.Group>

          <Form.Group controlId="events-location">
            <Form.Label>What type of event are you creating?</Form.Label>
            <Form.Select name="event_location" defaultValue="Choose...">
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
            <Form.Control type="date" name="date" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="event-time">
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" name="time" />
          </Form.Group>

          <Button variant="secondary" type="submit">
            Create Event
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EventForm;
