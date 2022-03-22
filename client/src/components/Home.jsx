<<<<<<< HEAD
import React from "react";

import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

import "./Home.scss";

export default function Home(props) {
  return (
    <>
      
      <Container className="main-title mb-5">
        <h2 className="fw-bold">Friendly Events & Services</h2>
      </Container>
      <Container fluid className="bg-secondary d-flex justify-content-center">
        <Row className="main-cards d-flex align-items-center">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-secondary d-flex justify-content-center">
        <Button>Learn more </Button>
      </Container>
      <Container>
        <Row>
          <Col>
            <Image />
          </Col>
          <Col>
            <h3>Events</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button>Create an Event</Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h3>Services</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button>Provide Service</Button>
          </Col>
          <Col>
            <Image />
          </Col>
        </Row>
      </Container>
    </>
  );
}
=======
import React from "react";

import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

import "./Home.scss";

export default function Home(props) {
  return (
    <>
      
      <Container className="main-title mb-5">
        <h2 className="fw-bold">Friendly Events & Services</h2>
      </Container>
      <Container fluid className="bg-secondary d-flex justify-content-center">
        <Row className="main-cards d-flex align-items-center">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-secondary d-flex justify-content-center">
        <Button>Learn more </Button>
      </Container>
      <Container>
        <Row>
          <Col>
            <Image />
          </Col>
          <Col>
            <h3>Events</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button>Create an Event</Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h3>Services</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button>Provide Service</Button>
          </Col>
          <Col>
            <Image />
          </Col>
        </Row>
      </Container>
    </>
  );
}
>>>>>>> service-component
