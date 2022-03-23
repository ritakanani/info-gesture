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
    const query = "INSERT INTO services";
    // const command = "SELECT * FROM services";
    // db.query(command).then((data) => {
    //   res.json(data.rows);
    // });
    console.log(req.body);
  });

  return router;
};

// let query = `
//     INSERT INTO resources (user_id, topic, url, title, description) VALUES ($1, $2, $3, $4, $5) RETURNING *;
//     `;
//     const values = [user_id, resource.topic, resource.url, resource.title, resource.description];

//     db.query(query, values)
//       .then((result) => {
//         console.log(result.rows[0]);
//         res.json({ resource_id: result.rows[0].id });
//       })
//       .catch((err) =>
//         console.log("Can not post the created resource: ", err.message)
//       );
