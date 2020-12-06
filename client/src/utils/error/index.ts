import { ApiError } from './ApiError';
import { ArgumentError } from './ArgumentError';
import { NetworkError } from './NetworkError';


export const Error = {
    Api: ApiError,
    Argument: ArgumentError,
    Network: NetworkError,
};
