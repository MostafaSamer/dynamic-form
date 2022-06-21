'use strict';

const express = require('express');
const mongoose = require("mongoose");
const path = require('path');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

// App
const app = express();

// Mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db:27017/forms');
mongoose.connection.on("error", function (err) {
  console.log(err);
  console.log("error in connecting, process is exiting ...");
  process.exit();
});
mongoose.connection.once("open", function () {
  console.log("Successfully connected to database");
});

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

require("./routes/form")(app);

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});