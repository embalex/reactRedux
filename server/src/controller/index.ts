import { ohlcController } from './ohlc';
import { registerController } from './utils';


export const controller = {
    ohlc: registerController(ohlcController),
};
