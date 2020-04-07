import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import globalReducer from './globalReducer';
import countryHistoryReducer from './countryHistoryReducer';

export default combineReducers({
    countries: countriesReducer,
    global: globalReducer,
    countryHistory: countryHistoryReducer
});