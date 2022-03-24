const express = require("express");
const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const command = "SELECT * FROM events";
    db.query(command).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/new", (req, res) => {    
    const { topic, title, description, location, date, time  } = req.body;    

    let query = `
    INSERT INTO events (title, category, description, location, date, time) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
    `;

    db.query(query, [title, topic, description, location, date, time])
      .then((result) => { 
        console.log(result.rows[0]);       
        res.status(200).json({ success: true });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};