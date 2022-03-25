import React, { useEffect, useState } from "react";
import axios from "axios";

export const EventsContext = React.createContext();

const EventsProvider = (props) => {
  const [events, setEvents] = useState([]);
  const [searchResults, setSearchResults] = useState([])

  const [searchActive, setSearchActive] = useState(false)

  const baseurl = process.env.REACT_APP_BASEURL;
  
    const search = (searchlocation) => {

      const searchResults = events.filter(item => item.location.toLowerCase().includes(searchlocation.toLowerCase()))
      setSearchResults(searchResults)  
             
      
    }

    useEffect(() => {
      searchResults.length > 0 ? setSearchActive(true) : setSearchActive(false)
          console.log('searchResultsChange',searchResults)
    }, [searchResults])

 
     const getEvents = () => {
      axios.get(`${baseurl}/api/events`)
      .then((response) => {
      setEvents(response.data);
    });
   
  }
  
  useEffect(() => {    
    getEvents()     
 }, []);


  const value = { events, getEvents, search, searchResults, searchActive, setSearchResults }
  return (
    <EventsContext.Provider value={value}>
        {props.children}
    </EventsContext.Provider>
  )
}

export default EventsProvider;