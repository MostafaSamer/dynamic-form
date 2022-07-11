const mongoose = require("mongoose");
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const FormFormatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  needAnswer: {
    type: Boolean,
    require: true
  },
  html: {
    type: String,
    required: true,
  }
});

const FormFormat = mongoose.model("FormFormat", FormFormatSchema);

module.exports = FormFormat;