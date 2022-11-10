import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'

import appReducer from "./reducers";
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    appReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({trace: true})
    ),
);

sagaMiddleware.run(mySaga);

export default store;