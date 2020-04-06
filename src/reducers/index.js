import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import globalReducer from './globalReducer';
import countryReducer from './countryReducer';

export default combineReducers({
    countries: countriesReducer,
    global: globalReducer,
    country: countryReducer
});