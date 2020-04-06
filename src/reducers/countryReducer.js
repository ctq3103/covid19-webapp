import { FETCH_COUNTRY } from "../types";

export default (state=[], action) => {
    switch (action.type) {
        case FETCH_COUNTRY:
            return [...state, action.payload];       
        default:
            return state;
    }
};