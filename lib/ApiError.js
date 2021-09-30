"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiError = exports.ApiError = void 0;
class ApiError extends Error {
    constructor(errDesc) {
        super(errDesc.message);
        this.name = errDesc.name;
        this.message = errDesc.message;
        this.status = errDesc.status || 500;
        this.isOperational =
            errDesc.isOperational == undefined || errDesc.isOperational == null ? true : errDesc.isOperational;
        //Create stack property on a target Object
        Error.captureStackTrace(this, this.constructor);
        Object.setPrototypeOf(this, ApiError.prototype);
    }
}
exports.ApiError = ApiError;
function createApiError(errorDesc, message, isOperational, status) {
    const err = Object.assign(errorDesc, {});
    if (message)
        err.message = message;
    if (isOperational)
        err.isOperational = isOperational;
    if (status)
        err.status = status;
    return new ApiError(err);
}
exports.createApiError = createApiError;
