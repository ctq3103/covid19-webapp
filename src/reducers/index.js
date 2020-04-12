import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import globalReducer from './globalReducer';
import countryHistoryReducer from './countryHistoryReducer';
import searchReducer from './searchReducer';
import lastUpdatedReducer from './lastUpdatedReducer';
import asyncReducer from './asyncReducer';

export default combineReducers({
    countries: countriesReducer,
    global: globalReducer,
    lastUpdated: lastUpdatedReducer,
    countryHistory: countryHistoryReducer,
    searchInput: searchReducer,
    async: asyncReducer
});