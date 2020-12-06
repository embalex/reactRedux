import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import { Error } from 'clientSrc/utils';


/** Собираем все редюсеры (*.reducers.ts) */
export const getModelsMap = () => require.context('clientSrc/', true, /model\/index\.ts/);

const models = getModelsMap();
const reducers = models.keys().reduce((acc, filename) => {
    const model = models(filename);
    const { namespace } = model;
    const modelKeys = Object.keys(model);

    if (namespace === undefined) {
        throw new Error.Argument(`Model ${filename} does not have namespace`);
    }

    const objectsWithReducerName = modelKeys
        .filter((value) => model[value]?.reducer !== undefined);

    if (objectsWithReducerName.length !== 1) {
        throw new Error.Argument(`Model ${filename} does not have (or have more than 1) reducer`);
    }


    return {
        ...acc,
        [namespace]: model[objectsWithReducerName[0]].reducer,
    };
}, {});


const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    combineReducers(reducers),
    applyMiddleware(sagaMiddleware),
);

// Start sagas
models.keys().forEach((filename) => {
    const model = models(filename);
    const modelKeys = Object.keys(model);

    const objectsWithSagaName = modelKeys
        .filter((value) => model[value]?.reducer !== undefined);

    objectsWithSagaName.forEach((key) => {
        sagaMiddleware.run(model[key].saga);
    });
});

