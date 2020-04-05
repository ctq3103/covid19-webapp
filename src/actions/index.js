import covid19api from '../apis/covid19api';
import { FETCH_COUNTRIES, FETCH_GLOBAL } from '../types';

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

