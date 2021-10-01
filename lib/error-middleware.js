"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const ApiError_1 = require("./ApiError");
const sequelize_error_1 = require("./sequelize-error");
const Debug = require("debug");
const debug = Debug('sx-api-error: error-middleware');
function globalErrorHandler(err, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) {
    let apiError = null;
    if (err instanceof Error) {
        // Check err Is Sequelize Error Object
        const errDesc = sequelize_error_1.createFromSequelizeError(err);
        if (errDesc) {
            apiError = new ApiError_1.ApiError(errDesc);
        }
        else {
            apiError = new ApiError_1.ApiError(err);
        }
    }
    else {
        if ('name' in err && 'message' in err) {
            apiError = new ApiError_1.ApiError(err);
        }
        else {
            // Unknown
            console.error('Unknown error object', err);
            return res.status(500).send(err);
        }
    }
    if (!apiError.isOperational) {
        console.error(apiError.stack);
    }
    debug(apiError.stack);
    return res.status(apiError.status).json({ name: apiError.name, message: apiError.message });
}
exports.globalErrorHandler = globalErrorHandler;
