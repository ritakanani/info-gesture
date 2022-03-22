<<<<<<< HEAD
import React from "react";
import { Card, Button } from "react-bootstrap";

const Events = () => {
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
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Events;
=======
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";



const Events = (props) => {
  const [event, setEvent] = useState();

  useEffect(() => {
    axios.get("/api/events")
    .then((response) => {      
      setEvent(response.data)      
      console.log("run", response.data[4]);
    });    
  }, []);




  return (
    <>
      <div>Event</div>      
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
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
>>>>>>> fetch-data
