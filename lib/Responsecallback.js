

/**
 * @typedef {import("./Http/Client/HttpContext")} HttpContext
 * @typedef {import("./Http/Response/HttpResponse")} HttpResponse
 * 
 * @param {Error} error
 * @param {HttpResponse | any} response
 * @param {HttpContext} context
 *
 * @returns {void}
 */
function ResponseCallback(error, response, context);

module.exports = ResponseCallback;