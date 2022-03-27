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

  // const [inputlocation, setinputLocation] = useState("")
  const { auth, logout } = useContext(authContext);

  const { setCurrentFilter } = props;

  // function for navigation to /events path in dropdown menu
  const navigate = useNavigate();
  const handleClick = () => {
    setCurrentFilter("");
    navigate('/events');
  }
  
  const [inputlocationValue, setinputLocation] = useState("");

  const { search, setSearchResults } = useContext(EventsContext)

  const onChange = (event) => {
    setinputLocation(event.target.value)
      if(event.target.value === ''){

      setSearchResults([])   
    }
  }

  const onSubmitSearch = (event) => {
       event.preventDefault()
        search(inputlocationValue)        
        console.log('submit', inputlocationValue)
  }

  // const { setLocation } = useContext(EventsContext)
  //   const onSubmit = (event) => {
  //      event.preventDefault()
  //       setLocation(inputlocation)
  //       navigate('/events');

  //   }

  return (
    <>
      <Container fluid className="d-flex justify-content-end my-1">
      { !auth ?  <Link className="nav-menu mr-1" to="/login">
          Login
        </Link> : <Button className="nav-menu mr-1" onClick={logout}>Logout </Button>  } 

        <span className="mr-1">|</span>
        <Link
          className="nav-menu text-light bg-secondary rounded-pill px-1"
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
                  <Link className="nav-menu" to="/">
                    Home
                  </Link>
                </Nav.Link>
                <NavDropdown title="Events" id="navbarScrollingDropdown">
              
                  <NavDropdown.Item onClick={() => handleClick()}>Events</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setCurrentFilter("Art & Ctafts")}>Art & Crafts</NavDropdown.Item>                  
                  <NavDropdown.Item onClick={() => setCurrentFilter("Yoga")}>Yoga</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setCurrentFilter("Family Gathering")}>Family Gathering</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setCurrentFilter("Job fair")}>Job fair</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setCurrentFilter("Webinar")}>Webinar</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setCurrentFilter("Other")}>Other</NavDropdown.Item>
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