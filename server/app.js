require("dotenv").config();
const { ENVIROMENT, PORT } = process.env;
console.log(process.env);

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
// db connection
const db = require("./configs/db.config");

// routes import
const catsRoutes = require("./routes/catsRoutes");
const eventsRoutes = require("./routes/eventsRoutes");

const app = express();

// middleware setup
app.use(morgan(ENVIROMENT));
app.use(bodyParser.json());

// routes
app.use("/cats", catsRoutes(db));
app.use("/events", eventsRoutes(db));

app.get("/", (req, res) => {
  res.json({ greetings: "hello world" });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
