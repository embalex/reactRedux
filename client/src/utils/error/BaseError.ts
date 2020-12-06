export class BaseError extends Error {
    constructor(message: string) {
        super(message);
    }

    getSummary() {
        return {
            message: super.message,
        };
    }
}
