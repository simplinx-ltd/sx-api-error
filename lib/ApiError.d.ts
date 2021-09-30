export interface ApiErrorDescription {
    name: string;
    message: string;
    status?: number;
    isOperational?: boolean;
}
export declare class ApiError extends Error {
    name: string;
    message: string;
    status: number;
    isOperational: boolean;
    constructor(errDesc: ApiErrorDescription);
}
export declare function createApiError(errorDesc: ApiErrorDescription, message?: string, isOperational?: boolean, status?: number): ApiError;
