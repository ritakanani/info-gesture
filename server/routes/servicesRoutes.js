const express = require("express");
const router = require("express").Router();
const app = express();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const command = "SELECT * FROM services";
    db.query(command).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/new", (req, res) => {
    const command =
      "INSERT INTO services (user_id, title, description, location, date, time) VALUES ($1, $2, $3, $4, $5, $6)";
    const values = [
      1,
      req.body.title,
      req.body.description,
      req.body.location,
      req.body.date,
      req.body.time,
    ];

    db.query(command, values)
      .then((result) => {
        console.log(result.rows[0]);
      })
      .catch((err) =>
        console.log("Can not post the created events: ", err.message)
      );
  });

  return router;
};
