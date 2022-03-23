import axios from "axios";
import React, { useState } from "react";
import Select from "react-select";

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
    { value: "Others", label: "Others" },
  ];

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
  };

  return (
    <div>
      <form action="/services/new" method="post">
        <div class="new_service_title">
          <label for="new_service_title">Title</label>
          <input
            id="title"
            value={title}
            type="text"
            name="service_title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>

        <div class="new_service_description">
          <label for="new_service_description">Description</label>
          <textarea
            id="description"
            value={description}
            placeholder="Description"
            name="service-description"
            cols="30"
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div class="new_service_location">
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