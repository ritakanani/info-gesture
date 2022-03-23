import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const Events = (props) => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    axios.get("/api/events")
      .then((response) => {
      setEvent(response.data);
    });
  }, []);

  const allEvents = event.map((item) => {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>March 22, 2022 •{item.location}</Card.Text>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="primary">Message</Button>
          </Card.Body>
        </Card>
      </>
    );
  });

  return (
    <>
      <div>Event</div>
      {allEvents}
    </>
  );
};

export default Events;