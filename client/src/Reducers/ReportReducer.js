import {SEND_FORM} from '../Actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case SEND_FORM:
            return Object.assign({}, state, action.form)
        default:
            return state  
    }  
}