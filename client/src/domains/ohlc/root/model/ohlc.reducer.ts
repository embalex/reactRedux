import { Reducer } from 'redux';

import { makeUndefinedResource } from 'clientSrc/utils';

import { IOHLCAction, SET_REDUCED_CANDLES } from './ohlc.action';
import { IReducerState } from './types';


const initialState: IReducerState = {
    candleRange: makeUndefinedResource(),
};

export const reducer: Reducer<IReducerState, IOHLCAction> = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case SET_REDUCED_CANDLES:
            return {
                candleRange: action.payload,
            };
        default: {
            return state;
        }
    }
};
