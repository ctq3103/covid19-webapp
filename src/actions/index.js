import covid19api from '../apis/covid19api';
import { FETCH_COUNTRIES, FETCH_GLOBAL, FETCH_COUNTRY } from '../types';

export const fetchCountries = () => 
    async dispatch => {
        const response = await covid19api.get('/summary');
        dispatch ({ type: FETCH_COUNTRIES, payload: response.data.Countries});
    } 

export const fetchGlobal = () => 
    async dispatch => {
        const response = await covid19api.get('/summary');
        dispatch ({ type: FETCH_GLOBAL, payload: response.data.Global});
    } 

export const fetchCountry = (countrySlug) =>
    async dispatch => {
        const response = await covid19api.get(`/total/dayone/country/${countrySlug}/status/confirmed`);
        dispatch({type: FETCH_COUNTRY, payload: response.data[0]})
    }
