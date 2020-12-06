import { isArray, isEmpty, isNil } from 'lodash';

import { typedKeys } from 'clientSrc/utils';


export const isFormData = (value: any): value is FormData => (
    value instanceof FormData
);

export const entryToUrl = (
    key: string | number,
    value: string | number | boolean,
): string => (
    `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
);

export const createUrl = (path: string | null, params?: {}): string => {
    if (isEmpty(params)) { return `${path}`; }

    const query = Object
        .entries(params || {})
        .reduce<string[]>((acc, [key, value]) => {
            if (isArray(value)) {
                value.forEach((valueItem) => acc.push(entryToUrl(key, valueItem)));
            } else if (
                (typeof value === 'string' && value !== '')
                || typeof value === 'number'
                || typeof value === 'boolean'
            ) {
                acc.push(entryToUrl(key, value));
            }

            return acc;
        }, []);

    return query.length ? `${path}?${query.join('&')}` : path as NonNullable<typeof path>;
};

export const stripEmpty = <T extends {[K in keyof T]: T[K]}>(source: T): T => (
    typedKeys(source).reduce<T>((acc, key) => {
        let value = source[key];
        if (isNil(value)) {
            return acc;
        }
        if (typeof value === 'string') {
            value = ((value as string).trim()) as typeof value;
            if (value === '') {
                return acc;
            }
        }
        acc[key] = value;
        return acc;
    }, {} as T)
);
