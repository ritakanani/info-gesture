import React from 'react'
import { Card, Button } from "react-bootstrap";

const EventList = ({items}) => {

 return (
    
    <>
    {items.map((item) => {
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>March 22, 2022 •{item.location}</Card.Text>
        <Card.Text>{item.description}</Card.Text>
        <Button variant="primary">Message</Button>
      </Card.Body>
    </Card>

    })
    }
  </>

 )
   
}

export default EventList