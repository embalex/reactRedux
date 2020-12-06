import { INullableResource } from 'clientSrc/utils';

import { namespace } from '../../constants'


export interface IRange {
    min: number;
    max: number;
}

export interface ICandleRange {
    year: IRange;
    value: IRange;
}

export interface IReducerState {
    candleRange: INullableResource<ICandleRange>;
}

export interface ISelectorState {
    [namespace]: IReducerState;
}
