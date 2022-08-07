const mongoose = require("mongoose");
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  responseEmail: {
    type: String,
    required: true,
  },
  format: [
    {
      questionTitle: {type: String},
      formFormat: {type: ObjectId, ref: 'FormFormat'},
      options: [{type: string}],
      required: Boolean
    }
  ]
});

const Form = mongoose.model("Form", FormSchema);

module.exports = Form;