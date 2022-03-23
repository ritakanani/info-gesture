import React, { useState } from "react";
import Select from "react-select";

function EventForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "hobbies", label: "Hobbies" },
    { value: "career", label: "Career" },
    { value: "childcare", label: "Childcare" },
    { value: "education", label: "Education" },
    { value: "fitness", label: "Fitness" },
    { value: "family", label: "Family" },
    { value: "others", label: "Others" },
  ];

  return (
    <div>
      <div class="new_service_location">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
      <form action="/events/new" method="post">
        <div class="new_event_title">
          <label for="new_event_title">Title</label>
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
          <label for="new_event_description">Description</label>
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

        <div class="new_event_location">
          <label for="new_event_location">Location</label>
          <select id="event_location" name="event_location">
            <option value=""></option>
            <option value="Toronto">Toronto</option>
            <option value="York">York</option>
            <option value="Etobicoke">Etobicoke</option>
            <option value="Scarborough">Scarborough</option>
            <option value="NorthYork">North York</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div class="new_event_date">
          <label for="new_event_time">Date</label>
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
          <label for="new_event_time">Time</label>
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

        <button type="submit" value="Submit">
          Create Event
        </button>
      </form>
    </div>
  );
}

export default EventForm;
