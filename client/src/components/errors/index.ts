import { ErrorNotFound } from './ErrorNotFound';
import { ErrorSomethingWrong } from './ErrorSomethingWrong';
import { withErrorBoundary } from "./withErrorBoundary";


export const Error = {
    NotFound: ErrorNotFound,
    SomethingWrong: ErrorSomethingWrong,
    withBoundary: withErrorBoundary,
};
