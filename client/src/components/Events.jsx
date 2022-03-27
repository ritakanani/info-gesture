import React, {  useContext, useEffect } from "react";
// import React, { useContext,useState, useEffect } from "react";

import { EventsContext } from "./hooks/EventsProvider";
import { Card, Button } from "react-bootstrap";
import { Map } from "./Map";
import { MapProvider } from "./hooks/MapProvider";
// import mapboxgl from 'mapbox-gl';
// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;



const Events = (props) => {
 
   const { events, getEvents, searchResults} = useContext(EventsContext)  
  
  const { currentFilter } = props;

  const searchEvents = searchResults.map((item) => {
    var d = new Date(item.date);
    var date = d.toString().split(" ").slice(0, 4).join(" ");
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{date} •{item.location}</Card.Text>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="primary">Message</Button>
          </Card.Body>
        </Card>
      </>
    );
  });

  useEffect(() => {
    getEvents()
  }, []);

  const allEvents = events.filter((x) => x.category === currentFilter || currentFilter === "").map((item) => {
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

      <MapProvider>
         <Map />
      </MapProvider>
      
      <h1>Events</h1>
      <h3>{currentFilter}</h3>
      {props.showAll === true && searchResults.length === 0 ? allEvents : searchEvents}
    </>
  );

};

export default Events;