import {combineReducers} from 'redux'
import ReportReducer from './ReportReducer' 

const rootReducer = combineReducers({
    Report: ReportReducer
})

export default rootReducer;