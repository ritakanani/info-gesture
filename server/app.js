require("dotenv").config();
const { ENVIROMENT, PORT } = process.env;
console.log(process.env);

const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
app.use(express.urlencoded({extended: true}));
// db connection
const db = require("./configs/db.config");

// routes import
const usersRoutes = require("./routes/usersRoutes");
const eventsRoutes = require("./routes/eventsRoutes");
const servicesRoutes = require("./routes/servicesRoutes");
const newEventRoutes = require("./routes/eventsRoutes");

// middleware setup
app.use(morgan(ENVIROMENT));
app.use(bodyParser.json());
app.use(express.json());

// app.set("view engine", "html");
// app.use(express.urlencoded({ extended: true }));

// app.use(
//   "/styles",
//   sassMiddleware({
//     source: __dirname + "/styles",
//     destination: __dirname + "/public/styles",
//     isSass: false, // false => scss, true => sass
//   })
// );

// app.use(express.static("public"));

// routes
app.use("/api/users", usersRoutes(db));
app.use("/api/events", eventsRoutes(db));
app.use("/api/services", servicesRoutes(db));
app.use("/api/create-event", newEventRoutes(db));

app.get("/", (req, res) => {
  res.json({ greetings: "hello world" });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
