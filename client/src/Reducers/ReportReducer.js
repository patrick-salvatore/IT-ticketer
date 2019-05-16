import {SAVE_FORM} from '../Actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case SAVE_FORM:
            return Object.assign({}, state, action.form)
        default:
            return state  
    }  
}