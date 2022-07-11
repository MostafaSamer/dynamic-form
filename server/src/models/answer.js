const mongoose = require("mongoose");
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const AnswerSchema = new mongoose.Schema({
  form: {
    type: ObjectId,
    ref: 'Form'
  },
  answers: {
    type: Object,
    required: true
  },
}, { timestamps: true });

const Answer = mongoose.model("Answer", AnswerSchema);

module.exports = Answer;