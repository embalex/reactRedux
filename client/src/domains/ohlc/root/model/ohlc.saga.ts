import { maxBy, minBy } from 'lodash';
import { call, put, takeEvery } from 'redux-saga/effects';

import { logger } from 'clientSrc/logger';
import { makeContentResource, makeErrorResource, makeLoadingResource } from 'clientSrc/utils';

import { action, GET_REDUCED_CANDLES_BY_YEARS } from './ohlc.action';
import { candleService } from './service';
import { ICandle } from './service/types';


interface ICandleMaxHMinL {
    maxH: number;
    minL: number;
}

function* getCandlesByYearSaga({ payload }: ReturnType<typeof action.getReducedCandlesByYear>) {
    yield put(
        action.setReducedCandle(
            makeLoadingResource(),
        ),
    );
    const [minYear, maxYear] = (payload.min < payload.max)
        ? [payload.min, payload.max]
        : [payload.max, payload.min];


    const candleMinMaxValues: ICandleMaxHMinL[] = [];

    try {
        for (let year = minYear; year <= maxYear; year += 1) {
            const yearCandles = yield call(candleService.getCandleByYear, year);
            candleMinMaxValues.push({
                maxH: (maxBy(yearCandles, ({ h }) => h) as ICandle).h,
                minL: (minBy(yearCandles, ({ l }) => l) as ICandle).l,
            });
        }
    } catch (error) {
        logger.error(error);
        yield put(action.setReducedCandle(makeErrorResource(error)));

        return;
    }

    yield put(
        action.setReducedCandle(
            makeContentResource({
                year: {
                    min: minYear,
                    max: maxYear,
                },
                value: {
                    min: (minBy(candleMinMaxValues, ({ minL }) => minL) as ICandleMaxHMinL).minL,
                    max: (maxBy(candleMinMaxValues, ({ minL }) => minL) as ICandleMaxHMinL).maxH,
                },
            }),
        ),
    );
}

export function* rootSaga() {
    yield takeEvery(GET_REDUCED_CANDLES_BY_YEARS, getCandlesByYearSaga);
}

