import { FETCH_HISTORY } from "../types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_HISTORY:
            return action.payload
        default: 
            return state;
    }
}
