import { get, isPlainObject } from 'lodash';

import { Error } from 'clientSrc/utils';

import { createUrl, isFormData, stripEmpty } from './utils';


const ACCEPT_JSON = { Accept: 'application/json' };
export const CONTENT_TYPE = 'Content-Type';
export const MIME_TYPE_JSON = 'application/json';


export const prepareRequestBody = (
    data: object | FormData | undefined,
    contentType: string,
): string | FormData | null | never => {
    if (!data) {
        return null;
    }

    if ((contentType === MIME_TYPE_JSON) && isPlainObject(data)) {
        return JSON.stringify(data);
    }

    if (isFormData(data)) {
        return data;
    }

    throw new Error.Argument('type does not supported');
};


export interface RequestConfig<T = {}, P = {}> {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: {[key: string]: string};
    params?: T;
    data?: P;
}

export const request = async <T, P = {}, K extends object | FormData = {}, U extends object = {}>(
    path: string,
    config: RequestConfig<P, K>,
): Promise<T | undefined> => {
    const url = createUrl(path, config.params);
    const { method } = config;

    const headers = stripEmpty({
        ...ACCEPT_JSON,
        [CONTENT_TYPE]: MIME_TYPE_JSON,
        ...config.headers,
    });

    const body: BodyInit | null = prepareRequestBody(config.data, headers[CONTENT_TYPE]);

    let response: Response;
    try {
        response = await fetch(url, {
            body,
            headers,
            method,
        });
    } catch (e) {
        throw new Error.Network(500, e.message);
    }

    if (response.ok) {
        if (response.status === 200 || response.status === 201) {
            const contentType = response.headers.get(CONTENT_TYPE);
            if (!contentType) {
                return undefined;
            }
            if (contentType.includes(MIME_TYPE_JSON)) {
                return await response.json() as T;
            }
            if (contentType.includes('text') || contentType.includes('xml')) {
                return await response.text() as unknown as T;
            }

            return await response.blob() as unknown as T;
        }

        return undefined;
    }

    const errorData: {code: number; message: string; } = {
        code: 0,
        message: '',
    };
    let parseError: Error | null = null;

    try {
        if (response.headers.get(CONTENT_TYPE)?.includes(MIME_TYPE_JSON)) {
            const payload: undefined = await response.json();
            errorData.code = get<number>(payload, 'code', 0);
            errorData.message = String(get(payload, 'message', ''));
        }
    } catch (e) {
        parseError = e;
    }

    throw new Error.Api(errorData.code, errorData.message);
};
