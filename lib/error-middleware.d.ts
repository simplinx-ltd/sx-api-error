import { NextFunction, Request, Response } from 'express';
import { ApiError } from './ApiError';
export declare function globalErrorHandler(err: Error | ApiError, req: Request, res: Response, next: NextFunction): Response;
