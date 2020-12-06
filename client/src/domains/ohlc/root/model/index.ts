import { action } from './ohlc.action';
import { reducer } from './ohlc.reducer';
import * as selector from './ohlc.selector';


export { namespace } from '../../constants';

export const ohlcModel = {
    action,
    reducer,
    selector,
};

export * from './constants';
