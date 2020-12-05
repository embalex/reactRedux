import {
    IContent,
    IError,
    ILoading,
    IResource,
    IUndefined,
    ResourceEnum,
} from './types';


type ICommonType<T, E extends Error = Error> = IContent<T> | IError<E> | ILoading | IUndefined;

export const makeContentResource = <T>(content: T): IContent<T> => ({
    kind: ResourceEnum.Content,
    content,
});

export const makeErrorResource = <E extends Error>(error: E): IError<E> => ({
    kind: ResourceEnum.Error,
    error,
});

export const makeLoadingResource = (): ILoading => ({
    kind: ResourceEnum.Loading,
});

export const makeUndefinedResource = (): IUndefined => ({
    kind: ResourceEnum.Undefined,
});

export const isContentResource = <T>(resource: ICommonType<T>): resource is IContent<T> => (
    resource.kind === ResourceEnum.Content
);

export const isErrorResource = <T, E extends Error>(resource: ICommonType<T, E>): resource is IError<E> => (
    resource.kind === ResourceEnum.Error
);

export const isLoadingResource = <T>(resource: ICommonType<T>): resource is ILoading => (
    resource.kind === ResourceEnum.Loading
);

export const isUndefinedResource = <T>(resource: ICommonType<T>): resource is IUndefined => (
    resource.kind === ResourceEnum.Undefined
);

export const mapContentResource = <T, R>(value: IResource<T>, map: (value: T) => R): IResource<R> => {
    if (isContentResource(value)) {
        return makeContentResource(map(value.content));
    }
    return value;
};
