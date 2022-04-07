import React from "react";
import { Container, Form, Button } from "react-bootstrap";

import { useState } from 'react';
import { authContext } from './providers/AuthProvider';
import { useContext } from 'react';
import "./Login.scss";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(authContext);

  const onSubmit = function(event) {
   if(!email){
      return
    }
    event.preventDefault();
    login(email, password);
  };

  return (
    <Container className="form-container d-flex justify-content-center">

      <Form onSubmit={onSubmit} className="login-form" >

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="username"
            value={email} placeholder="Enter email"
            onChange={event => setEmail(event.target.value)} />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password"
            value={password} placeholder="Password"
            onChange={event => setPassword(event.target.value)} />
        </Form.Group>

        <Button variant="secondary" type="submit">Login</Button>
     
      </Form>
    </Container>
  );
};
