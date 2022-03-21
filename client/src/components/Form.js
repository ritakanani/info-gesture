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
