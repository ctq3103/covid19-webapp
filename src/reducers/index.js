import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import globalReducer from './globalReducer';
import countryHistoryReducer from './countryHistoryReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    countries: countriesReducer,
    global: globalReducer,
    countryHistory: countryHistoryReducer,
    searchInput: searchReducer
});