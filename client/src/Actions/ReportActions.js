import { SEND_FORM } from './types'


export const sendFormToState = (form) => {
    return {
        type: SEND_FORM, 
        form
    }
}