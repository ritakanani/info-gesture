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
const newEventRoutes = require("./routes/eventsRoutes");
const login = require("./routes/login");


const app = express();
app.use(cors({origin: 'http://localhost:3000'}));
// middleware setup
app.use(morgan(ENVIROMENT));
app.use(bodyParser.json());

// routes
app.use("/users", usersRoutes(db));
app.use("/events", eventsRoutes(db));
app.use("/services", servicesRoutes(db));
app.use("/api/create-event", newEventRoutes(db));
app.use("/login", login(db));

app.get("/", (req, res) => {
  res.json({ greetings: "hello world" });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
