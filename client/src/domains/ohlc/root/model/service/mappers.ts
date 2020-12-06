import { ICandle, IDtoCandle } from './types';


export const mapDtoToCandle = (dto: IDtoCandle[]): ICandle[] => dto.map(
    (value) => ({ ...value }),
);
