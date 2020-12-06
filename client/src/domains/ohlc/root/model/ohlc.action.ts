import { INullableResource } from 'clientSrc/utils';

import { ICandleRange, IRange } from './types';


export const GET_REDUCED_CANDLES_BY_YEARS = 'GET_REDUCED_CANDLES_BY_YEARS';


type IGetReducedCandlesByYearsAction = (yearsRange: IRange) => {
    type: typeof GET_REDUCED_CANDLES_BY_YEARS;
    payload: IRange;
}

const getReducedCandlesByYearAction: IGetReducedCandlesByYearsAction = (yearsRange) => ({
    type: GET_REDUCED_CANDLES_BY_YEARS,
    payload: yearsRange,
});


export const SET_REDUCED_CANDLES = 'SET_REDUCED_CANDLES';

type ISetReducedCandleAction = (payload: INullableResource<ICandleRange>) => {
    type: typeof SET_REDUCED_CANDLES;
    payload: INullableResource<ICandleRange>;
}

const setReducedCandleAction: ISetReducedCandleAction = (payload) => ({
    type: SET_REDUCED_CANDLES,
    payload,
});


export type IOHLCAction = ReturnType<IGetReducedCandlesByYearsAction> | ReturnType<ISetReducedCandleAction>;

export const action = {
    getReducedCandlesByYear: getReducedCandlesByYearAction,
    setReducedCandle: setReducedCandleAction,
};
