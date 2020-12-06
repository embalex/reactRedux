import { request } from 'clientSrc/rest';

import { API } from './api';
import { mapDtoToCandle } from './mappers';
import { ICandle, IDtoCandle } from './types';
import { candleValidator } from './validators';


const getService = () => ({
    getCandleByYear: async (year: number): Promise<ICandle[]> => {
        const config = {
            method: 'GET' as const,
            params: { year },
        };

        const dto = await request<IDtoCandle>(API.getCandlesByYear(), config);
        candleValidator.validateSync(dto);

        return mapDtoToCandle(dto as unknown as IDtoCandle[]);
    },
});


export const candleService = getService();
