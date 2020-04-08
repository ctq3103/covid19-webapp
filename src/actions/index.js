import covid19api from '../apis/covid19api';
import _ from 'lodash';
import { FETCH_COUNTRIES, FETCH_GLOBAL, FETCH_HISTORY, CHANGE_SEARCH_FIELD } from '../types';

export const fetchCountries = () => 
    async dispatch => {
        const response = await covid19api.get('/summary');
        const sortedData = _.orderBy(response.data.Countries, ['TotalConfirmed'], ['desc']);
        dispatch ({ type: FETCH_COUNTRIES, payload: sortedData});
    } 

export const fetchGlobal = () => 
    async dispatch => {
        const response = await covid19api.get('/summary');
        dispatch ({ type: FETCH_GLOBAL, payload: response.data.Global});
    } 

export const fetchHistory = (slug) =>
    async dispatch => {
        const resConfirmed = await covid19api.get(`/total/dayone/country/${slug}/status/confirmed`);
        const resRecovered = await covid19api.get(`/total/dayone/country/${slug}/status/recovered`);
        const resDeaths = await covid19api.get(`/total/dayone/country/${slug}/status/deaths`);

        dispatch({
            type: FETCH_HISTORY, 
            payload: {
                confirmed: resConfirmed.data,
                recovered: resRecovered.data,
                deaths: resDeaths.data
            }
        })
    }

export const setSearchField = (searchInput) =>({
    type: CHANGE_SEARCH_FIELD,
    payload: searchInput
});
