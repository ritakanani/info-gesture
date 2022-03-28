const express = require("express");
const router = require("express").Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const command =
      `SELECT users.email, services.user_id, services.id, services.title, services.description, services.image_url FROM services JOIN users ON users.id = user_id`;
      
    db.query(command).then((data) => {
      res.json(data.rows);
    });
  });

  router.post("/new", (req, res) => {
    // const { user_id } = req.params;

    const { title, description, image_url } = req.body;
    console.log(req.body);

    const query = `INSERT INTO services (user_id, title, description, image_url) VALUES ($1, $2, $3, $4) RETURNING * `;

    db.query(query, [6, title, description, image_url]) // Switch with req.params above when login is established
      .then((result) => {
        console.log(result.row[0]);
        res.status(200).json({ success: true });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
