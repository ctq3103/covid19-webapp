import covid19api from '../apis/covid19api';
import _ from 'lodash';
import { FETCH_COUNTRIES, FETCH_GLOBAL, FETCH_HISTORY, CHANGE_SEARCH_FIELD, FETCH_LAST_UPDATED } from '../types';
import { asyncActionStart, asyncActionFinish, asyncActionError } from './asyncActions';

export const fetchCountries = () => 
    async dispatch => {
        try {
            dispatch(asyncActionStart());
            const response = await covid19api.get('/summary');
            const sortedData = _.orderBy(response.data.Countries, ['TotalConfirmed'], ['desc']);
            dispatch ({ type: FETCH_COUNTRIES, payload: sortedData});
            dispatch(asyncActionFinish());
        } catch (error) {
            dispatch(asyncActionError());
        }
    } 

export const fetchGlobal = () => 
    async dispatch => {
        try {
            dispatch(asyncActionStart());
            const response = await covid19api.get('/summary');
            dispatch ({ type: FETCH_GLOBAL, payload: response.data.Global});
            dispatch(asyncActionFinish());
        } catch (error) {
            dispatch(asyncActionError());
        }  
    } 

export const fetchLastUpdated = () => 
    async dispatch => {
        try {
            dispatch(asyncActionStart());
            const response = await covid19api.get('/summary');
            dispatch ({ type: FETCH_LAST_UPDATED, payload: response.data.Date});
            dispatch(asyncActionFinish());
        } catch (error) {
            dispatch(asyncActionError());
        }
    } 

export const fetchHistory = (slug) =>
    async dispatch => {
        try {
            dispatch(asyncActionStart());
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
            
            dispatch(asyncActionFinish());
        } catch (error) {
            dispatch(asyncActionError());
        }
    }

export const setSearchField = (searchInput) =>({
    type: CHANGE_SEARCH_FIELD,
    payload: searchInput
});
