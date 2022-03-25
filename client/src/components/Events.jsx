import React, { useContext,useEffect } from "react";
import {EventsContext} from "./hooks/EventsProvider";
import { Card, Button } from "react-bootstrap";


const Events = (props) => {
  // const [event, setEvent] = useState([]);
  const {events, getEvents, searchResults, location }  = useContext(EventsContext)
  const { currentFilter } = props; 
  // console.log("current", currentFilter) ;

  // useEffect(() => {
  //   axios.get("/api/events").then((response) => {
  //     setEvent(response.data);
  //   });
  // }, []);


  // const searchEvents = searchResults.map((item) => {
  //   var d = new Date(item.date);
  //   var date = d.toString().split(" ").slice(0, 4).join(" ");
  //   return (
  //     <>
  //       <Card style={{ width: "18rem" }}>
  //         <Card.Img variant="top" src="" />
  //         <Card.Body>
  //           <Card.Title>{item.title}</Card.Title>
  //           <Card.Text>{date} •{item.location}</Card.Text>
  //           <Card.Text>{item.description}</Card.Text>
  //           <Button variant="primary">Message</Button>
  //         </Card.Body>
  //       </Card>
  //     </>
  //   );
  // });

  // console.log('data', events);
  // console.log('search', searchResults);
  

  useEffect(() => {
    
     getEvents()

    
  }, []);

  console.log("location", location);

  

  const allEvents = events
    .filter((x) => (x.category === currentFilter || currentFilter === "") && x.location.toLowerCase().includes(location.toLowerCase()))
    .map((item) => {
      console.log("item", item);
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
      {/* {currentFilter ? allEvents : searchEvents} */}

      {/* {!currentFilter ? allEvents : null } */}
      {allEvents}   
      {/* {searchResults.length === 0 ? allEvents : searchEvents } */}
      {/* {searchResults.length === 0 && !currentFilter ? allEvents : null } */}
    </>
  );
};

export default Events;
