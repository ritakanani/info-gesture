import React, { useEffect, useContext } from "react";

import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { EventsContext } from "./hooks/EventsProvider";
import Mailto from "./MailLink";

import "./Home.scss";

export default function Home(props) {
  const { events, getEvents } = useContext(EventsContext);

  useEffect(() => {
    getEvents();
  }, []);

  const formatDate = (d) => {
    return d.toString().split(" ").slice(0, 4).join(" ");
  };

  const allEvents = events
    .filter((item) => {
      var d = new Date(item.date);
      return formatDate(d) === formatDate(new Date());
    })
    .map((item) => {
      var d = new Date(item.date);
      return (
        <>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.image_url} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {formatDate(d)} •{item.location}
                </Card.Text>
                <Card.Text>{item.description}</Card.Text>
                {/* <Button variant="primary">Message</Button> */}
                <Mailto email={item.email} title={item.title} />
              </Card.Body>
            </Card>
          </Col>
        </>
      );
    });
  return (
    <>
      <Container className="main-title mb-5">
        <h2 className="fw-bold">Friendly Events & Services</h2>
      </Container>
      <div className="main-cards mb-5">
        <Container fluid className="d-flex justify-content-center py-5">
          <Row className="cards-list d-flex align-items-center">
            {allEvents}
          </Row>
        </Container>
        <Container fluid className="d-flex justify-content-center pb-5">
          <Button className="bg-secondary">Learn more </Button>
        </Container>
      </div>
      <div className="main-body">
        <Container className="py-5">
          <Row>
            <Col>
              <Image src="../images/britt-gaiser-events.jpg" thumbnail />
            </Col>
            <Col>
              <h3>Events</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Utenim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button className="bg-danger" href="/events/new">
                Create an Event
              </Button>
            </Col>
          </Row>
        </Container>
        <Container className="py-5">
          <Row>
            <Col>
              <h3>Services</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Utenim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button className="bg-danger" href="/services/new">
                Provide Service
              </Button>
            </Col>
            <Col>
              <Image src="../images/services.jpg" thumbnail />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}