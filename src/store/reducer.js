import { combineReducers } from 'redux';
import postReducer from '../action/postReducer';

export default function makeReducer() {
  return combineReducers({
    appTest: postReducer
  });
}
