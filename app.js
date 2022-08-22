const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const index = require("./routes/index");
const api = require("./routes/api");

const db = require("./db/models");

const app = express();
app.use(cors());

db.sequelize.sync();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index); // bootstrap index route
app.use("/api", api); // initiate api routes

module.exports = app;
