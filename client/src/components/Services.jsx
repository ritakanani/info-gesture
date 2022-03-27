import axios from "axios";
import React, { useState, useEffect } from "react";
// import "./Services.scss";
import { Card, Button } from "react-bootstrap";
import Mailto from "./MailLink";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    axios.get("/api/services").then((response) => {
      setService(response.data);
    });
  }, []);

  
  const allServices = service.map((item) => {  

    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="primary">Message</Button>
            <Mailto email={item.email} title={item.title} />
          </Card.Body>
        </Card>
      </>
    );
  });

  return (
    <>
      <div>Service</div>
      {allServices}
    </>
  );
};

export default Services;