import { StatusCodes } from 'http-status-codes';

import { BaseError } from './Base';
import { IError } from './types';


export class UnknownError extends BaseError implements IError {
    info: string | {};

    constructor(message: string, info?: string | {}) {
        super(StatusCodes.INTERNAL_SERVER_ERROR, message ?? 'Unknown error without message');
        this.info = info ?? 'Extended information is absent';
    }

    public getSummary() {
        return {
            ...super.getSummary(),
            extInfo: this.info,
        };
    };
}
