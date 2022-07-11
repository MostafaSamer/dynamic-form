module.exports = function (app) {
    const propertiesController = require("../controllers/properties");

    app.get("/properties", propertiesController.getProperties);
    app.get("/propertie/:id", propertiesController.getPropertie);
    app.post("/propertie", propertiesController.addProperties);

};