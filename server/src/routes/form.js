module.exports = function (app) {
    const formsController = require("../controllers/form");

    app.get("/forms", formsController.getForms);
    app.get("/form/:id", formsController.getForm);
    app.post("/form/add", formsController.addForm);

};