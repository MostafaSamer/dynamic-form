module.exports = function (app) {
    const formsController = require("../controllers/form");

    app.get("/form", formsController.getForms);
    app.post("/form/add", formsController.addForm);

};