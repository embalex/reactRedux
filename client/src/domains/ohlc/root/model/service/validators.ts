import * as yup from 'yup';


export const candleValidator = yup.array(
    yup.object({
        o: yup.number().required(),
        h: yup.number().required(),
        l: yup.number().required(),
        c: yup.number().required(),
    }).required(),
);
