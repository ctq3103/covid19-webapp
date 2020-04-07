import covid19api from '../apis/covid19api';
import { FETCH_COUNTRIES, FETCH_GLOBAL, FETCH_HISTORY_CONFIRMED, FETCH_HISTORY_RECOVERED, FETCH_HISTORY_DEATHS } from '../types';

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

export const fetchHistory = (slug) =>
    async dispatch => {
        const resConfirmed = await covid19api.get(`/total/dayone/country/${slug}/status/confirmed`);
        dispatch({type: FETCH_HISTORY_CONFIRMED, payload: resConfirmed.data})

        const resRecovered = await covid19api.get(`/total/dayone/country/${slug}/status/recovered`);
        dispatch({type: FETCH_HISTORY_RECOVERED, payload: resRecovered.data})

        const resDeaths = await covid19api.get(`/total/dayone/country/${slug}/status/deaths`);
        dispatch({type: FETCH_HISTORY_DEATHS, payload: resDeaths.data})
    }

