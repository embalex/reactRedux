import { errorHandler } from './errorHandler';
import { InvalidRequestError } from './InvalidRequestError';
import { UnknownError } from './UnknownError';


export const Error = {
    InvalidRequest: InvalidRequestError,
    Unknown: UnknownError,
    handler: errorHandler,
};
