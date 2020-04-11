import { FETCH_LAST_UPDATED } from "../types";

export default (state = '', action) => {
    switch (action.type) {
        case FETCH_LAST_UPDATED:
            return action.payload;
        default:
            return state;
    }
};