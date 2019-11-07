const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const server = express();

server.use(express.json());

mongoose.connect("mongodb://localhost:27017/Project", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreativeIndex: true
});

const routes = require("./routes");

server.use(routes);

server.listen(3333);
