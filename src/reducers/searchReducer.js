import { CHANGE_SEARCH_FIELD } from "../types";

export default (state = '', action) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return action.payload;
        default: 
            return state;
    }
}
