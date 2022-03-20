import React from "react";

function Form() {
  return (
    <div>
      <label for="topic">What are you creating today?</label>
      <select id="topic" name="topic">
        <option value=""></option>
        <option value="Service">Service</option>
        <option value="Event">Event</option>
      </select>

      <button type="submit">Go!</button>
    </div>
  );
}

export default Form;

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

// CREATE TABLE services (
//   id SERIAL PRIMARY KEY NOT NULL,
//   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
//   title VARCHAR(255) NOT NULL,
//   category VARCHAR(255) NOT NULL,
//   description TEXT,
//   url VARCHAR(255)
// );
