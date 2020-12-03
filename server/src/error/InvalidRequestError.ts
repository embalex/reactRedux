import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';

import { BaseError } from './Base';
import { IError } from './types';


export class InvalidRequestError extends BaseError implements IError {
    constructor(message: string, private request: Request) {
        super(StatusCodes.BAD_REQUEST, message);
    }

    public getSummary() {
        return {
            ...super.getSummary(),
            requestUrl: this.request.url,
        };
    }
}
