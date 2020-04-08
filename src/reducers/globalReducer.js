import { FETCH_GLOBAL } from "../types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_GLOBAL:
            return action.payload;
        default:
            return state;
    }
};