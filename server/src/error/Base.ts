import { IError } from './types';


export class BaseError extends Error implements IError {
    constructor(private code: number, message?: string) {
        super(message);
    }

    public getSummary() {
        return {
            code: this.code,
            message: this.message,
        };
    }
}
