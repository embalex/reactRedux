export enum ResourceEnum {
    Content = 'Content',
    Error = 'Error',
    Loading = 'Loading',
    Undefined = 'Undefined',
}

export interface IContent<T> {
    kind: ResourceEnum.Content;
    content: T;
}

export interface IError<E extends Error = Error> {
    kind: ResourceEnum.Error;
    error: E;
}

export interface ILoading {
    kind: ResourceEnum.Loading;
}

export interface IUndefined {
    kind: ResourceEnum.Undefined;
}

export type IResource<T, E extends Error = Error> = IContent<T> | IError<E> | ILoading;
export type INullable<T> = IContent<T> | IUndefined;
export type INullableResource<T> = IResource<T> | IUndefined;
