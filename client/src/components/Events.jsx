import React, { useContext,useEffect } from "react";
import {EventsContext} from "./hooks/EventsProvider";
import { Card, Button } from "react-bootstrap";


const Events = (props) => {
  const {events, getEvents, searchResults }  = useContext(EventsContext)

  const searchEvents = searchResults.map((item) => {
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

  console.log('data', events);

  // const [event, setEvent] = useState([]);

  useEffect(() => {
    
     getEvents()

    
  }, []);

  const allEvents = events.map((item) => {
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
   {searchResults.length === 0 ? allEvents : searchEvents }


    </>
  );
};

export default Events;