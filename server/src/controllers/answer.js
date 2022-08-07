const responseMessage = require("../constant/responseMessage");
const answerModel = require("../models/answer");

exports.addAnswer = async (request, response) => {
    try {
        let newAnswer = await answerModel.create(request.body);
        response
        .json({
            ...responseMessage.SUCCESS,
            ...{data: newAnswer}
        })
    } catch (error) {
        console.log(error)
        response
        .json({ ...responseMessage.INTERNAL_SERVER });
    }
};