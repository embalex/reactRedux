import { ErrorRequestHandler } from 'express';

import { logger } from '../logger';
import { IError } from './types';
import { UnknownError } from './UnknownError';


export const errorHandler: ErrorRequestHandler = (
    error: Error,
    request,
    response,
    next,
) => {
    const errorSummary = ((error as any).getSummary !== undefined)
        ? (error as unknown as IError).getSummary()
        : (new UnknownError(error.message)).getSummary();

    logger.error(errorSummary);

    response.status(errorSummary.code).json(errorSummary).end();
};
