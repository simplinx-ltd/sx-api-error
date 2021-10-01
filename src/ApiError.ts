export interface ApiErrorDescription {
    name: string;
    message: string;
    status?: number;
    isOperational?: boolean;
}

export class ApiError extends Error {
    public name: string;
    public message: string;
    public status: number;
    public isOperational: boolean;

    public constructor(errDesc: ApiErrorDescription) {
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

export function createApiError(
    errorDesc: ApiErrorDescription,
    message?: string,
    isOperational?: boolean,
    status?: number,
): ApiError {
    const err = Object.assign(errorDesc, {});
    if (message) err.message = message;
    if (isOperational) err.isOperational = isOperational;
    if (status) err.status = status;
    return new ApiError(err);
}
