module.exports = function (app) {
    const formFormatsController = require("../controllers/formFormat");

    app.get("/formFormat", formFormatsController.getFormFormats);
    app.get("/formFormat/:id", formFormatsController.getFormFormat);
    app.post("/formFormat", formFormatsController.addFormFormat);

};