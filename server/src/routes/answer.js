module.exports = function (app) {
    const answersController = require("../controllers/answer");

    app.post("/answer", answersController.addAnswer);

};