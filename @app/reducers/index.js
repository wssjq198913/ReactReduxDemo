import { combineReducers } from 'redux'

import startReducer from './start';
import questionnaireReducer from './questionnaire';

export default combineReducers({
//   routing: routerReducer,
    startReducer,
    questionnaireReducer
})