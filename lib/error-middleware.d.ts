import { NextFunction, Request, Response } from 'express';
import { ApiErrorDescription } from './ApiError';
export declare function globalErrorHandler(err: Error | ApiErrorDescription, req: Request, res: Response, next: NextFunction): Response;
