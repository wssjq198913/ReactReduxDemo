import { combineReducers } from 'redux'

import startState from './start';
import questionnaireState from './questionnaire';

export default combineReducers({
//   routing: routerReducer,
    startState,
    questionnaireState
})