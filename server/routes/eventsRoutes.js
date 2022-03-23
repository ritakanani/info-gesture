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

  router.post("/new", (req, res) => {
    // const { user_id } = req.params;
    const { topic, event_title, event_description, event_location, date, time  } = req.body;

    console.log("form body", req.body);

    let query = `
    INSERT INTO events (title, category, description, location, date, time) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
    `;
    db.query(query, [event_title, topic, event_description, event_location, date, time])
      .then((result) => {        
        res.status(200).json({ success: true });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};