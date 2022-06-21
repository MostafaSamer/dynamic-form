const formModel = require("../models/form");

exports.getForms = async (request, response) => {
    let forms = await formModel.find({});

    try {
        response.send(forms);
    } catch (error) {
        response.status(500).send(error);
    }
};

exports.addForm = async (request, response) => {
    console.log(request.body)

    try {
        response.send(forms);
    } catch (error) {
        response.status(500).send(error);
    }
};