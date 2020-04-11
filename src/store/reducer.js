import { combineReducers } from 'redux';
import postReducer from '../action/postReducer';
import { reducer as getAppSettings } from '../action/responseData';

export default function makeReducer() {
  return combineReducers({
    appTest: postReducer,
    appSettings: getAppSettings,
  });
}
