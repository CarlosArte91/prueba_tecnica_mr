const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api", require("./routes"));

module.exports = app;