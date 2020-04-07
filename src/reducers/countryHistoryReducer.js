import { FETCH_HISTORY_CONFIRMED, FETCH_HISTORY_DEATHS, FETCH_HISTORY_RECOVERED } from "../types";


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_HISTORY_CONFIRMED:
            return {...state, confirmed: action.payload};       
        case FETCH_HISTORY_RECOVERED:
            return {...state, recovered: action.payload};       
        case FETCH_HISTORY_DEATHS:
            return {...state, deaths: action.payload};       
        default:
            return state;
    }
}
