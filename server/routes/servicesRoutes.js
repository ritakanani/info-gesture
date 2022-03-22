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
  return router;
};

app.get("services/new", (req, res) => {
  console.log(res.body);
});

app.post("services/new", (req, res) => {
  console.log(res.body);
});
