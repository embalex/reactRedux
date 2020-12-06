import { IRouter } from 'express';
import * as yup from 'yup';

import { Error } from '../error';
import { service } from '../service';
import { wait } from '../utils';


const validateYear = (value: unknown): number | never => {
    const validator = yup.number().required();
    return validator.validateSync(value);
};

export const ohlcController = (router: IRouter) => {
    router.get('/candles_by_year', async (request, response) => {
        const { year: queryYear } = request.query;
        let year: number;

        try {
            year = validateYear(queryYear);
        } catch (error) {
            throw new Error.InvalidRequest(`Parameter "year" (${queryYear}) is invalid. Expected number`, request);
        }

        try {
            await wait(100);
            response.send(service.ohlc.getByYear(year));
        } catch (error) {
            throw new Error.InvalidRequest(error.message, request);
        }
    });

    return router;
};
