const responseMessage = require("../constant/responseMessage");
const formFormatModel = require("../models/formFormat");

exports.getFormFormats = async (request, response) => {
    try {
        let formFormat = await formFormatModel.find({});
        response
        .json({
            ...responseMessage.SUCCESS,
            ...{data: formFormat}
        })
    } catch (error) {
        response
        .json({ ...responseMessage.INTERNAL_SERVER });
    }
};

exports.getFormFormat = async (request, response) => {
    try {
        let formId = request.params.id;
        let formFormat = await formFormatModel.findOne({ _id: formId });
        response
        .json({
            ...responseMessage.SUCCESS,
            ...{data: formFormat}
        })
    } catch (error) {
        response
        .json({ ...responseMessage.INTERNAL_SERVER });
    }
};

exports.addFormFormat = async (request, response) => {
    try {
        let newformFormat = await formFormatModel.create(request.body);
        response
        .json({
            ...responseMessage.SUCCESS,
            ...{data: newformFormat}
        })
    } catch (error) {
        response
        .json({ ...responseMessage.INTERNAL_SERVER });
    }
};