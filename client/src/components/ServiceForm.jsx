import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Img } from "react-bootstrap";

function ServiceForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImg] = useState("");

  let navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/api/services/new", {
        title,
        description,
        image_url
      })
      .then((res) => {
        console.log("SUCCESS");
      })
      .catch((error) => {
        console.log(`Something went wrong : ${error.message}`);
      });

    navigate("/services");
  };

  return (
    <div>
      <form action="/services/new" method="post">
        <div>
          <label for="image_url">
            Add photos:
          </label>
          <input
            id="photos"            
            value={image_url}
            type="text"
            name="image_url"
            placeholder="Image"
            onChange={(e) => setImg(e.target.value)}
          ></input>
        </div>
        <div>
          <label for="service_title">Title</label>
          <input
            id="title"            
            value={title}
            type="text"
            name="service_title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>

        <div>
          <label for="service_description">Description</label>
          <textarea
            id="description"            
            value={description}
            placeholder="Description"
            name="service_description"
            cols="30"
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" value="Submit" onClick={submitForm}>
          Create
        </button>
      </form>
    </div>
  );
}

export default ServiceForm;
