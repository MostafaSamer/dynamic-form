const httpStatusCodes = require('./httpStatusCodes')

module.exports = {
    SUCCESS: { Status: httpStatusCodes.OK, Message: "Done" },
    NOT_FOUND: { Status: httpStatusCodes.NOT_FOUND, Message: "Not Found" },
    BAD_REQUEST: { Status: httpStatusCodes.BAD_REQUEST, Message: "Check Your Data" },
    INTERNAL_SERVER: { Status: httpStatusCodes.INTERNAL_SERVER, Message: "Something Went Wrong" }
}