import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const Events = (props) => {
  const [event, setEvent] = useState([]);
  const { currentFilter } = props;  

  useEffect(() => {
    axios.get("/api/events").then((response) => {
      setEvent(response.data);
    });
  }, []);

  const allEvents = event
    .filter((x) => x.category === currentFilter || currentFilter === "")
    .map((item) => {
      var d = new Date(item.date);
      var date = d.toString().split(" ").slice(0, 4).join(" ");

      return (
        <>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {date} •{item.location}
              </Card.Text>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary">Message</Button>
            </Card.Body>
          </Card>
        </>
      );
    });

  return (
    <>
      <h1>Events</h1>
      <h3>{currentFilter}</h3>
      {allEvents}      
    </>
  );
};

export default Events;
