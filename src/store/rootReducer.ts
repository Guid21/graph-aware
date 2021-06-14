import { combineReducers } from 'redux';
import { tableRowsReducer as tableRows } from './';

export const rootReducer = combineReducers({ tableRows });
