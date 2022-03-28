import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import "./Header.scss";

import { useContext, useState } from 'react';
import {authContext} from '../providers/AuthProvider';
import {EventsContext} from '../hooks/EventsProvider'


export default function Header(props) {

  //  const [inputlocation, setinputLocation] = useState("")
  const { auth, logout } = useContext(authContext);

  const { setCurrentFilter } = props;
  // console.log('set',setCurrentFilter)
  // function for navigation to /events path in dropdown menu
  const navigate = useNavigate();

  const { search, setSearchResults, setLocation } = useContext(EventsContext)

  
  const [inputlocationValue, setinputLocationValue] = useState("");

  const onChange = (event) => {
    setinputLocationValue(event.target.value)
      if(event.target.value === ''){

      setSearchResults([]);   
    }
  }

  // const onSubmitSearch = (event) => {
  //      event.preventDefault()
  //       search(inputlocationValue)        
  //       console.log('submit', inputlocationValue)
  // }

  
    const onSubmitSearch = (event) => {
       event.preventDefault()
        setLocation(inputlocationValue)
        navigate('/events');
    }

    const resetLocation = () => {
      setLocation('')
      setinputLocationValue('')
      
    }

    const handleClick = (clickEvent) => {
      resetLocation()
      navigate('/events');
      setCurrentFilter(clickEvent);
    }

  return (
    <>
      <Container fluid className="d-flex justify-content-end my-1">
      { !auth ?  <Link className="nav-menu px-2" to="/login">
          Login
        </Link> : <Button className="nav-logout" onClick={logout}>Logout</Button>  } 

        <span className="mx-1">|</span>
        <Link
          className="nav-menu px-2"
          to="/register"
        >
          Register
        </Link>
      </Container>
      <Navbar bg="light" expand="lg" className="py-4 border mb-5">
        <Container fluid>
          <Navbar.Brand className="nav-logo" href="/">
            Info Gesture
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="nav-menu">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Container className="d-flex justify-content-end">
              <div className="d-flex">
                <Nav.Link>
                  <Link className="nav-menu h5" to="/" onClick={resetLocation}>
                    Home
                  </Link>
                </Nav.Link>
                <NavDropdown title="Events" id="navbarScrollingDropdown">
              
                  <NavDropdown.Item onClick={() => handleClick("")}>Events</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => {
                    handleClick("Art & Crafts")
                   
                  }}>Art & Crafts </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleClick("Yoga")}>Yoga</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleClick("Family Gathering")}>Family Gathering</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleClick("Job fair")}>Job fair</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleClick("Webinar")}>Webinar</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleClick("Other")}>Other</NavDropdown.Item>
                  <NavDropdown.Item href="/events/new"> Event Form </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Services" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/services">Services</NavDropdown.Item>
                  <NavDropdown.Item href="/services/new">
                    Service Form
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Container>

            <Form className="d-flex" onSubmit={onSubmitSearch}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={inputlocationValue}
                onChange={onChange}
                
              />
              <Button type="submit"  variant="outline-success">Location</Button>
            </Form>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}