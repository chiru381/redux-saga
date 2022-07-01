import {applyMiddleware, createStore} from 'redux';
import {mobileReducer} from './reducers/mobile';
// import {contactsReducer} from './reducers/contacts';
import createSagaMiddleware from 'redux-saga';
import {watchUser} from './sagas/users.saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(mobileReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchUser);
