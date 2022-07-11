const mongoose = require("mongoose");

const propertiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  }
});

const Properties = mongoose.model("Properties", propertiesSchema);

module.exports = Properties;