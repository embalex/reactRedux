import { combineReducers, createStore } from 'redux';


/** Собираем все редюсеры (*.reducers.ts) */
export const getModelsMap = () => require.context('clientSrc/', true, /model\/index\.ts/);

const models = getModelsMap();
const reducers = models.keys().reduce((acc, filename) => {
    const model = models(filename);
    const { namespace } = model;
    const modelKeys = Object.keys(model);

    if ((modelKeys.length !== 2) && (namespace === undefined)) {
        throw new Error(`[ArgumentError]. Model ${filename} is invalid`);
    }

    const objectWithReducerName = modelKeys.filter((value) => value !== 'namespace')[0];

    return {
        ...acc,
        [namespace]: model[objectWithReducerName].reducer,
    };
}, {});

export const store = createStore(combineReducers(reducers));

//
// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(
//     reducer,
//     applyMiddleware(sagaMiddleware)
// )
//
// sagaMiddleware.run(helloSaga);
