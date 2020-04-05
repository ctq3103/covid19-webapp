import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import globalReducer from './globalReducer';

export default combineReducers({
    countries: countriesReducer,
    global: globalReducer
});