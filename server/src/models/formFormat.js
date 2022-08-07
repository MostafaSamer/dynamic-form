const mongoose = require("mongoose");
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const FormFormatSchema = new mongoose.Schema({
  typeTitle: {
    type: String,
    required: true,
  },
  type: {
    type: Boolean,
    require: true
  },
  
});

const FormFormat = mongoose.model("FormFormat", FormFormatSchema);

module.exports = FormFormat;

// types
// short answer
// long answer
// multiple choice
// checkbox
// dropdown
// date
// time