import React, { useState } from "react";
import axios from "axios";

export const EventsContext = React.createContext();

const EventsProvider = (props) => {
  const [events, setEvents] = useState([]);
  const [searchResults, setSearchResults] = useState([])

  const baseurl = process.env.REACT_APP_BASEURL;
  
    const search = (searchlocation) => {

      const searchResults = events.filter(item => item.location === searchlocation)
      setSearchResults(searchResults)  
      console.log(searchlocation)       

    }

     const getEvents = () => {
      axios.get(`${baseurl}/api/events`)
      .then((response) => {
      setEvents(response.data);
    });
    }

  
  const value = { events, getEvents, search, searchResults }
  return (
    <EventsContext.Provider value={value}>
        {props.children}
    </EventsContext.Provider>
  )
}

export default EventsProvider;