const responseMessage = require("../constant/responseMessage");
const formModel = require("../models/form");

exports.getForms = async (request, response) => {
    try {
        let forms = await formModel.find({});
        response
        .json({
            ...responseMessage.SUCCESS,
            ...{data: forms}
        })
    } catch (error) {
        response
        .json({ ...responseMessage.INTERNAL_SERVER });
    }
};

exports.getForm = async (request, response) => {
    try {
        let formId = request.params.id;
        let form = await formModel
        .findOne({ _id: formId })
        .populate('format');
        response
        .json({
            ...responseMessage.SUCCESS,
            ...{data: form}
        })
    } catch (error) {
        response
        .json({ ...responseMessage.INTERNAL_SERVER });
    }
};

exports.addForm = async (request, response) => {
    try {
        let newForm = await formModel.create(request.body);
        response
        .json({
            ...responseMessage.SUCCESS,
            ...{data: newForm}
        })
    } catch (error) {
        response
        .json({ ...responseMessage.INTERNAL_SERVER });
    }
};