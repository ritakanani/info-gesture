import React from "react";

const EventForm = () => {
  return (
    <div>
      <label for="topic">What type of event are you creating?</label>
      <select id="event_topic" name="topic">
        <option value=""></option>
        <option value="Hobbies">Hobbies</option>
        <option value="Career">Career</option>
        <option value="Childcare">Childcare</option>
        <option value="Education">Education</option>
        <option value="Fitness">Fitness</option>
        <option value="Family">Family</option>
        <option value="Other">Other</option>
      </select>

      <form action="/events/new" method="post">
        <div class="new_event_title">
          <label for="new_event_title">Title</label>
          <input
            id="title"
            type="text"
            name="event_title"
            placeholder="Title"
          ></input>
        </div>

        <div class="new_event_description">
          <label for="new_event_description">Description</label>
          <textarea
            id="description"
            placeholder="Description"
            name="event-description"
            cols="30"
            rows="10"
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
            type="date"
            name="date"
            min="2022-04-01T00:00"
          ></input>
        </div>

        <div class="new_event_time">
          <label for="new_event_time">Time</label>
          <input
            id="event_time"
            type="time"
            name="time"
            min="8:00"
            max="22:00"
          ></input>
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default EventForm;