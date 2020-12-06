import { BaseError } from './BaseError';


export class ArgumentError extends BaseError {
    private readonly errorName = 'ArgumentError';

    constructor(message: string) {
        super(message);
    }

    getSummary() {
        return {
            ...super.getSummary(),
            name: this.errorName,
        };
    }
}
