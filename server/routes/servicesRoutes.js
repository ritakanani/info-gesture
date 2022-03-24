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
    // const { user_id } = req.params;

    const { title, description } = req.body;
    console.log(req.body);

    const query = `INSERT INTO services (user_id, title, description) VALUES ($1, $2, $3) RETURNING * `;

    db.query(query, [6, title, description, location]) // Switch with req.params above when login is established
      .then((result) => {
        // const services = result.rows;
        console.log(result.rows);
        // const templateVars = {
        //   services,
        // };
        // res.render("services", templateVars);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
