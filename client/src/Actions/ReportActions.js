import { SAVE_FORM } from './types'

export const saveFormToState = (form) => {
    return {
        type: SAVE_FORM, 
        form
    }
}