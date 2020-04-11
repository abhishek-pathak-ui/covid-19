import { createStore, applyMiddleware } from 'redux';
import logger from "redux-logger";
import thunkMiddleware from 'redux-thunk';
import makeReducer from './reducer';

const makeStore = (initialState = {}) => createStore(makeReducer(), initialState);

export default makeStore;
