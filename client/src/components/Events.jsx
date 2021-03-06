import React, { useContext, useEffect } from "react";
// import React, { useContext,useState, useEffect } from "react";

import { EventsContext } from "./hooks/EventsProvider";
import { Card, Container, Row } from "react-bootstrap";
import { Map } from "./Map";
import { MapProvider } from "./hooks/MapProvider";
import Mailto from "./MailLink";

import "./Events.scss";

const Events = (props) => {
  const { events, getEvents, searchResults } = useContext(EventsContext);

  const { currentFilter } = props;

  const searchEvents = searchResults.map((item) => {
    var d = new Date(item.date);
    var date = d.toString().split(" ").slice(0, 4).join(" ");
    return (
      <>
        {/* <Card style={{ width: "18rem" }}> */}
        <Card className="e-card mx-3">
          <Card.Img variant="top mt-4" src={item.image_url} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {date} •{item.location}
            </Card.Text>
            <Card.Text>{item.description}</Card.Text>
            {/* <Button variant="primary">Message</Button> */}
          </Card.Body>
            <div className="p-3 h3"><Mailto email={item.email} title={item.title} /></div>
        </Card>
      </>
    );
  });

  useEffect(() => {
    getEvents();
  }, []);

  const allEvents = events
    .filter((x) => x.category === currentFilter || currentFilter === "")
    .map((item) => {
      var d = new Date(item.date);
      var date = d.toString().split(" ").slice(0, 4).join(" ");
      return (
        <>
          {/* <Card style={{ width: "18rem" }}> */}
          <Card className="e-card mx-3">
            <Card.Img variant="top mt-4" src={item.image_url} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {date} •{item.location}
              </Card.Text>
              <Card.Text>{item.description}</Card.Text>
              {/* <Button variant="primary">Message</Button> */}
            </Card.Body>
              <div className="p-3 h3"><Mailto email={item.email} title={item.title} /></div>
          </Card>
        </>
      );
    });

  return (
    <>    
      <div className="events">
        <MapProvider>
          <Map />
        </MapProvider>

        <div className="title-page">
          
          <h1>Events</h1>
        </div>

        <div className="text-center mt-5">
          
          <h3>{currentFilter}</h3>
        </div>

        <Container className="d-flex mt-5">
          <Row xs={1} md={3} className="g-4 justify-content-center">
            {props.showAll === true && searchResults.length === 0
              ? allEvents
              : searchEvents}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Events;
