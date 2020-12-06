import { action } from './ohlc.action';
import { reducer } from './ohlc.reducer';
import { rootSaga as saga } from './ohlc.saga';
import * as selector from './ohlc.selector';


export { namespace } from '../../constants';

export const ohlcModel = {
    action,
    reducer,
    selector,
    saga,
};

export * from './constants';
