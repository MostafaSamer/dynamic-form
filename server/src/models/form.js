const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  responseEmail: {
    type: String,
    required: true,
  },
  format: {
    type: Object,
    required: true,
  }
});

const Form = mongoose.model("Form", FormSchema);

module.exports = Form;