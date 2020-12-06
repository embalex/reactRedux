import { namespace } from '../../constants';
import { ISelectorState } from './types';


export const candlesRange = (state: ISelectorState) => ({
    ...state[namespace].candleRange,
});

