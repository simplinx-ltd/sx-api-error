import { NextFunction, Request, Response } from 'express';
import { ApiError, ApiErrorDescription } from './ApiError';
import { createFromSequelizeError } from './sequelize-error';

export function globalErrorHandler(
    err: Error | ApiErrorDescription,
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

    // if (!apiError.isOperational) {
    // }

    console.error(apiError.stack);

    return res.status(apiError.status).json({ name: apiError.name, message: apiError.message });
}
