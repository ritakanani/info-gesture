import React from "react";
import { Card, Button } from "react-bootstrap";

const Events = (props) => {
  return (
    <>
      <div>Event</div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Event Title</Card.Title>
          <Card.Text>
            March 22, 2022 •Toronto
          </Card.Text>          
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Message</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Events;