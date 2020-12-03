import { StatusCodes } from 'http-status-codes';


export interface IError {
    getSummary: () => {
        code: StatusCodes;
        message: string;
    };
}
