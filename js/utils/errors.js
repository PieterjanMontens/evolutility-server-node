const logger = require('./logger')

function badRequest(res, msg, errorCode = 400) {
	const errorMsg = msg || "Bad request";
	
	logger.logError(msg)
    res.statusMessage = errorMsg
    res.status(errorCode).end();
    return res
}

module.exports = {

    badRequest: badRequest,

}
