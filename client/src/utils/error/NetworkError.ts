import { BaseError } from './BaseError';


export class NetworkError extends BaseError {
    private readonly errorName = 'NetworkError';

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
