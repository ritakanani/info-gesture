import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Img } from "react-bootstrap";

function ServiceForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  let navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/api/services/new", {
        title,
        description,
      })
      .then((res) => {
        console.log("SUCCESS");
      })
      .catch((error) => {
        console.log(`Something went wrong : ${error.message}`);
      });

    navigate("/services");
  };

  return (
    <Container className="d-flex justify-content-center">
      <Form className="event-form" action="/services/new" method="post">
        <Form.Group className="mb-3" controlId="service-title">
          <Form.Label>What type of service?</Form.Label>
          <Form.Control
            id="title"
            value={title}
            type="text"
            name="service_title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="service-description">
          <Form.Label>Service details</Form.Label>
          <Form.Control
            id="description"
            value={description}
            name="event_description"
            as="textarea"
            rows={3}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button variant="secondary" type="submit" onClick={submitForm}>
          Create
        </Button>
      </Form>
    </Container>
  );
}

export default ServiceForm;
