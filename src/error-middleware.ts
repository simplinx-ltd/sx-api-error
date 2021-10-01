import { NextFunction, Request, Response } from 'express';
import { ApiError } from './ApiError';
import { createFromSequelizeError } from './sequelize-error';
import * as Debug from 'debug';
const debug = Debug('sx-api-error: error-middleware');

export function globalErrorHandler(
    err: Error | ApiError,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction,
): Response {
    let apiError: ApiError = null;
    if (err instanceof Error) {
        // Check err Is Sequelize Error Object
        const errDesc = createFromSequelizeError(err);
        if (errDesc) {
            apiError = new ApiError(errDesc);
        } else {
            apiError = new ApiError(err);
        }
    } else {
        if ('name' in err && 'message' in err) {
            apiError = new ApiError(err);
        } else {
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
