import { BaseError } from './BaseError';


export class ApiError extends BaseError {
    private readonly errorName = 'ApiError';

    constructor(private code: number, message: string) {
        super(message);
    }

    getSummary() {
        return {
            ...super.getSummary(),
            code: this.code,
            name: this.errorName,
        };
    }
}
