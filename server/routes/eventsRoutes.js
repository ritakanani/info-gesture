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
  return router;
};
