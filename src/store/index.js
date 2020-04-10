import { createStore, applyMiddleware } from 'redux';
import logger from "redux-logger";
import makeReducer from './reducer';

const makeStore = (initialState = {}) => createStore(makeReducer(), initialState, applyMiddleware(logger));

export default makeStore;
