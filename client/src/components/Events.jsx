import React, { useContext, useEffect } from "react";
// import React, { useContext,useState, useEffect } from "react";

import { EventsContext } from "./hooks/EventsProvider";
import { Card, Button } from "react-bootstrap";
import Mailto from "./MailLink";
import { Map } from "./Map";
import { MapProvider } from "./hooks/MapProvider";

import "./Events.scss";

const Events = (props) => {
  const { events, getEvents, searchResults } = useContext(EventsContext);

  const { currentFilter } = props;

  const searchEvents = searchResults.map((item) => {
    var d = new Date(item.date);
    var date = d.toString().split(" ").slice(0, 4).join(" ");
    return (
      <>
      
      <Card className="e-card mx-3">
          <Card.Img variant="top mt-4" src={item.image_url} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {date} •{item.location}
            </Card.Text>
            <Card.Text>{item.description}</Card.Text>
            {/* <Button variant="primary">Message</Button> */}
            <Mailto email={item.email} title={item.title} />
          </Card.Body>
          <div className="py-3"><Button variant="primary">Message</Button></div>
        </Card>
      </>
    );
  });

  useEffect(() => {
    getEvents();
  }, []);

  const allEvents = events.filter((x) => x.category === currentFilter || currentFilter === "").map((item) => {
    var d = new Date(item.date);
    var date = d.toString().split(" ").slice(0, 4).join(" ");
    return (      
      <>       

        <Card className="e-card mx-3">
          <Card.Img variant="top mt-4" src={item.image_url} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {date} •{item.location}
             
            </Card.Text>
            <Card.Text>{item.description}</Card.Text>
                     
          </Card.Body>
          <div className="py-3"><Button variant="primary">Message</Button></div>
        </Card>
      </>
    );
  });

  return (
    <div className='events'>

      <MapProvider>
        <Map />
      </MapProvider>

      <div className='title-page'> <h1>Events</h1>  </div>
     
     <div className="text-center mt-5">  <h3>{currentFilter}</h3> </div>
  
      <Container className="events-cards mt-5">
        <Row xs={1} md={3} className="g-5 justify-content-center">
            {props.showAll === true && searchResults.length === 0 ? allEvents : searchEvents}
        </Row>
      
      </Container>
    </div>
  );
};

export default Events;
