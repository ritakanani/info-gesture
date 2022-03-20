import React from "react";

function ServiceForm() {
  return (
    <div>
      <label for="topic">What type of service are you providing?</label>
      <select id="service_topic" name="topic">
        <option value=""></option>
        <option value="Health">Health</option>
        <option value="Job">Job</option>
        <option value="Childcare">Childcare</option>
        <option value="Education">Education</option>
        <option value="Fitness">Fitness</option>
        <option value="Food">Food</option>
        <option value="Other">Other</option>
      </select>

      <form method="post">
        <div class="new_service_title">
          <label for="new_service_title">Title</label>
          <input
            id="title"
            type="text"
            name="service_title"
            placeholder="Title"
          ></input>
        </div>

        <div class="new_service_description">
          <label for="new_service_description">Description</label>
          <textarea
            id="description"
            placeholder="Description"
            name="service-description"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div class="new_service_url">
          <label for="new_service_url">URL</label>
          <input
            id="service_url"
            type="url"
            name="url"
            placeholder="URL"
          ></input>
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default ServiceForm;
