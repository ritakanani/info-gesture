import axios from "axios";
import React, { useState } from "react";
import Select from "react-select";

function EventForm() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const category_options = [
    { value: "Hobbies", label: "Hobbies" },
    { value: "Career", label: "Career" },
    { value: "Childcare", label: "Childcare" },
    { value: "Education", label: "Education" },
    { value: "Fitness", label: "Fitness" },
    { value: "Family", label: "Family" },
    { value: "Other", label: "Other" },
  ];

  const location_options = [
    { value: "Toronto", label: "Toronto" },
    { value: "York", label: "York" },
    { value: "Etobicoke", label: "Etobicoke" },
    { value: "Scarborough", label: "Scarborough" },
    { value: "North York", label: "North York" },
    { value: "Other", label: "Other" },
  ];

  const submitForm = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/events/new", {
        category: selectedCategory.value,
        title,
        description,
        location: selectedLocation.value,
        date,
        time,
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
      <form action="/events/new" method="post">
        <label for="category">What type of event are you creating?</label>
        <div class="event_category">
          <Select
            defaultValue={selectedCategory}
            onChange={setSelectedCategory}
            options={category_options}
          />
        </div>
        <div class="new_event_title">
          <label for="event_title">Title</label>
          <input
            id="title"
            value={title}
            type="text"
            name="event_title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>

        <div class="new_event_description">
          <label for="event_description">Description</label>
          <textarea
            id="description"
            value={description}
            placeholder="Description"
            name="event-description"
            cols="30"
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div class="event_location">
          <Select
            defaultValue={selectedLocation}
            onChange={setSelectedLocation}
            options={location_options}
          />
        </div>

        <div class="event_date">
          <label for="date">Date</label>
          <input
            id="event_date"
            value={date}
            type="date"
            name="date"
            min="2022-04-01T00:00"
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>

        <div class="new_event_time">
          <label for="time">Time</label>
          <input
            id="event_time"
            value={time}
            type="time"
            name="time"
            min="8:00"
            max="22:00"
            onChange={(e) => setTime(e.target.value)}
          ></input>
        </div>

        <button type="submit" value="Submit" onClick={submitForm}>
          Create Event
        </button>
      </form>
    </div>
  );
}

export default EventForm;
