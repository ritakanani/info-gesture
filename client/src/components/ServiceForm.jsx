import axios from "axios";
import React, { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

function ServiceForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "Toronto", label: "Toronto" },
    { value: "York", label: "York" },
    { value: "Etobicoke", label: "Etobicoke" },
    { value: "Scarborough", label: "Scarborough" },
    { value: "North York", label: "North York" },
    { value: "Other", label: "Other" },
  ];

  let navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/api/services/new", {
        title,
        description,
        location: selectedOption.value,
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
        <div class="service_title">
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

        <div class="service_description">
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

        <div class="service_location">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </div>

        <button type="submit" value="Submit" onClick={submitForm}>
          Create
        </button>
      </form>
    </div>
  );
}

export default ServiceForm;