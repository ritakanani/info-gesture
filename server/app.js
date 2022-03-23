require("dotenv").config();
const { ENVIROMENT, PORT } = process.env;
console.log(process.env);

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
// db connection
const db = require("./configs/db.config");

// routes import
const usersRoutes = require("./routes/usersRoutes");
const eventsRoutes = require("./routes/eventsRoutes");
const servicesRoutes = require("./routes/servicesRoutes");

const app = express();

app.use(cors());

// middleware setup
app.use(morgan(ENVIROMENT));
app.use(bodyParser.json());

// routes
app.use("/api/users", usersRoutes(db));
app.use("/api/events", eventsRoutes(db));
app.use("/api/services", servicesRoutes(db));

app.get("/", (req, res) => {
  res.json({ greetings: "hello world" });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
