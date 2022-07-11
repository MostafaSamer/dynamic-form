const responseMessage = require("../constant/responseMessage");
const propertiesModel = require("../models/properties");

exports.getProperties = async (request, response) => {
    try {
        let properties = await propertiesModel.find({});
        response
        .json({
            ...responseMessage.SUCCESS,
            ...{data: properties}
        })
    } catch (error) {
        response
        .json({ ...responseMessage.INTERNAL_SERVER });
    }
};

exports.getPropertie = async (request, response) => {
    try {
        let propertiesId = request.params.id;
        let properties = await propertiesModel.findOne({ _id: propertiesId });
        response
        .json({
            ...responseMessage.SUCCESS,
            ...{data: properties}
        })
    } catch (error) {
        response
        .json({ ...responseMessage.INTERNAL_SERVER });
    }
};

exports.addProperties = async (request, response) => {
    try {
        let newProperties = await propertiesModel.create(request.body);
        response
        .json({
            ...responseMessage.SUCCESS,
            ...{data: newProperties}
        })
    } catch (error) {
        response
        .json({ ...responseMessage.INTERNAL_SERVER });
    }
};