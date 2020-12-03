import { OHLCS_PER_YEAR, START_YEAR } from './constants';
import { IOHLC } from './types';


const generateYearOHLCS = (): IOHLC[] => (
    new Array(OHLCS_PER_YEAR)
        .fill(0)
        .map(() => {
            const getRandomValue = () => Math.random() * 10;

            return {
                o: getRandomValue(),
                h: getRandomValue(),
                l: getRandomValue(),
                c: getRandomValue(),
            };
        })
);

export const OHLC = () => {
    const currentYear = new Date().getFullYear();
    const OHLCS = new Array(currentYear - START_YEAR + 1)
        .fill(0)
        .reduce<{[P in number]: IOHLC[] }>((acc, _, index) => ({
            ...acc,
            [START_YEAR + index]: generateYearOHLCS(),
        }), {});


    return {
        getByYear: (year: number): IOHLC[] | never => {
            const values = OHLCS[year];

            if (!values) {
                throw new Error(`Invalid parameter year (${year}). Available [${START_YEAR} ... ${currentYear}]`);
            }

            return values;
        },
    };
};
