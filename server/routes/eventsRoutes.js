const express = require("express");
const router = require("express").Router();
const app = express();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const command = "SELECT * FROM events";
    db.query(command).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/events/new", (req, res) => {
    const { user_id } = req.params;
    const { topic, event_title, event_description, event_location, date, time  } = req.body;

    let query = `
    INSERT INTO events (user_id, title, category, description, location, date, time) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
    `;
    db.query(query, [user_id, event_title, topic, event_description, event_location, date, time])
      .then((result) => {
        const events = result.rows;
        console.log(result.rows);
        const templateVars = {
          events,
        };
        res.render("events", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
