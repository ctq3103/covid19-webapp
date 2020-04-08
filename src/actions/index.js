import covid19api from '../apis/covid19api';
import _ from 'lodash';
import { FETCH_COUNTRIES, FETCH_GLOBAL, FETCH_HISTORY } from '../types';

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

// export const fetchHistory = (slug) =>
//     async dispatch => {
//         const resConfirmed = await covid19api.get(`/total/dayone/country/${slug}/status/confirmed`);
//         dispatch({type: FETCH_HISTORY_CONFIRMED, payload: resConfirmed.data})

//         const resRecovered = await covid19api.get(`/total/dayone/country/${slug}/status/recovered`);
//         dispatch({type: FETCH_HISTORY_RECOVERED, payload: resRecovered.data})

//         const resDeaths = await covid19api.get(`/total/dayone/country/${slug}/status/deaths`);
//         dispatch({type: FETCH_HISTORY_DEATHS, payload: resDeaths.data})
//     }

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
