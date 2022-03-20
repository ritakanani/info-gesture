import React from "react";

function EventForm() {
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

      <form method="post">
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
          <label for="new_event_url">URL</label>
          <input id="event_url" type="url" name="url" placeholder="URL"></input>
        </div>

        <div class="new_event_date">
          <label for="new_event_url">Date</label>
          <input id="event_url" type="url" name="url" placeholder="URL"></input>
        </div>

        <div class="new_event_time">
          <label for="new_event_url">Time</label>
          <input id="event_url" type="url" name="url" placeholder="URL"></input>
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default EventForm;

// CREATE TABLE events (
//   id SERIAL PRIMARY KEY NOT NULL,
//   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
//   title VARCHAR(255) NOT NULL,
//   category VARCHAR(255) NOT NULL,
//   description TEXT,
//   location VARCHAR(255) NOT NULL,
//   date DATE,
//   time TIME
// );
