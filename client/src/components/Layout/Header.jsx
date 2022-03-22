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
import { Link } from "react-router-dom";

import "./Header.scss";

export default function Header(props) {
  return (
    <>
      <Container fluid className="d-flex justify-content-end my-1">
        <Link className="nav-menu mr-1" to="/login">
          Login
        </Link>
        <span className="mr-1">|</span>
        <Link className="nav-menu text-light bg-secondary rounded-pill px-1" to="/register">
          Register
        </Link>
      </Container>
      <Navbar bg="light" expand="lg" className="py-4 border mb-5">
        <Container fluid>
          <Navbar.Brand className="nav-logo" href="#">
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
                  <NavDropdown.Item href="#action3">Events</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                  <Link className="nav-menu" to="/services">
                    Services
                  </Link>
                </Nav.Link>
              </div>
            </Container>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Location</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
